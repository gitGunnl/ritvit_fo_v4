
#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class SecurityScanner {
  constructor() {
    this.issues = [];
    this.suspiciousPatterns = [
      { pattern: /eval\s*\(/gi, severity: 'high', message: 'Use of eval() detected' },
      { pattern: /Function\s*\(/gi, severity: 'high', message: 'Dynamic function creation detected' },
      { pattern: /document\.write/gi, severity: 'medium', message: 'document.write usage detected' },
      { pattern: /innerHTML\s*=/gi, severity: 'medium', message: 'innerHTML assignment detected' },
      { pattern: /dangerouslySetInnerHTML/gi, severity: 'medium', message: 'dangerouslySetInnerHTML usage detected' },
      { pattern: /setTimeout\s*\(\s*['"`][^'"`]*['"`]/gi, severity: 'medium', message: 'String-based setTimeout detected' },
      { pattern: /setInterval\s*\(\s*['"`][^'"`]*['"`]/gi, severity: 'medium', message: 'String-based setInterval detected' },
      { pattern: /<script[^>]*>/gi, severity: 'high', message: 'Inline script tag detected' },
      { pattern: /javascript:/gi, severity: 'high', message: 'JavaScript protocol detected' },
      { pattern: /on\w+\s*=/gi, severity: 'medium', message: 'Inline event handler detected' }
    ];
    this.excludeDirectories = ['node_modules', '.git', 'dist', 'build', '.config'];
    this.includeExtensions = ['.js', '.jsx', '.ts', '.tsx', '.html', '.htm'];
  }

  async scanDirectory(dirPath) {
    const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);
      
      if (entry.isDirectory()) {
        if (!this.excludeDirectories.includes(entry.name)) {
          await this.scanDirectory(fullPath);
        }
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name);
        if (this.includeExtensions.includes(ext)) {
          await this.scanFile(fullPath);
        }
      }
    }
  }

  async scanFile(filePath) {
    try {
      const content = await fs.promises.readFile(filePath, 'utf8');
      const relativePath = path.relative(process.cwd(), filePath);
      
      this.suspiciousPatterns.forEach(({ pattern, severity, message }) => {
        const matches = content.match(pattern);
        if (matches) {
          matches.forEach(match => {
            this.issues.push({
              file: relativePath,
              severity,
              message,
              match: match.trim(),
              line: this.getLineNumber(content, match)
            });
          });
        }
      });
    } catch (error) {
      console.warn(`Could not read file ${filePath}: ${error.message}`);
    }
  }

  getLineNumber(content, match) {
    const index = content.indexOf(match);
    if (index === -1) return null;
    return content.substring(0, index).split('\n').length;
  }

  generateReport() {
    console.log('\n🔒 Security Scan Report');
    console.log('====================\n');
    
    if (this.issues.length === 0) {
      console.log('✅ No security issues detected!');
      return;
    }

    const groupedIssues = this.issues.reduce((acc, issue) => {
      if (!acc[issue.severity]) acc[issue.severity] = [];
      acc[issue.severity].push(issue);
      return acc;
    }, {});

    ['high', 'medium', 'low'].forEach(severity => {
      if (groupedIssues[severity]) {
        console.log(`🚨 ${severity.toUpperCase()} SEVERITY (${groupedIssues[severity].length} issues):`);
        groupedIssues[severity].forEach(issue => {
          console.log(`  📁 ${issue.file}:${issue.line || '?'}`);
          console.log(`     ${issue.message}`);
          console.log(`     Found: ${issue.match}`);
          console.log('');
        });
      }
    });

    console.log(`\nTotal issues found: ${this.issues.length}`);
    console.log('\n💡 Recommendations:');
    console.log('   • Replace eval() and Function() with safer alternatives');
    console.log('   • Use textContent instead of innerHTML where possible');
    console.log('   • Sanitize user input before rendering');
    console.log('   • Use Content Security Policy headers');
    console.log('   • Validate and sanitize all external data');
  }
}

async function main() {
  const scanner = new SecurityScanner();
  const projectRoot = path.resolve(__dirname, '..');
  
  console.log('🔍 Starting security scan...');
  await scanner.scanDirectory(projectRoot);
  scanner.generateReport();
}

main().catch(console.error);
