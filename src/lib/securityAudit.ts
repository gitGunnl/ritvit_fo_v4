
/**
 * Security audit utility for identifying potential security issues
 * and code patterns that might trigger WAF detection
 */

export class SecurityAudit {
  private static suspiciousPatterns = [
    // Patterns that might trigger WAF
    /eval\s*\(/gi,
    /Function\s*\(/gi,
    /document\.write/gi,
    /innerHTML\s*=/gi,
    /outerHTML\s*=/gi,
    /setTimeout\s*\(\s*['"`][^'"`]*['"`]/gi,
    /setInterval\s*\(\s*['"`][^'"`]*['"`]/gi,
    // XSS patterns
    /<script[^>]*>/gi,
    /javascript:/gi,
    /on\w+\s*=/gi,
    // SQL injection patterns
    /union\s+select/gi,
    /drop\s+table/gi,
    /insert\s+into/gi,
    // Command injection patterns
    /system\s*\(/gi,
    /exec\s*\(/gi,
    /spawn\s*\(/gi
  ];

  private static allowedDomainPatterns = [
    /^https:\/\/[a-zA-Z0-9-]+\.googleapis\.com/,
    /^https:\/\/[a-zA-Z0-9-]+\.gstatic\.com/,
    /^https:\/\/api\.openai\.com/,
    /^https:\/\/docs\.google\.com/
  ];

  /**
   * Scan code content for suspicious patterns
   */
  static scanCode(content: string, filename: string): SecurityIssue[] {
    const issues: SecurityIssue[] = [];
    
    this.suspiciousPatterns.forEach((pattern, index) => {
      const matches = content.match(pattern);
      if (matches) {
        matches.forEach(match => {
          issues.push({
            type: 'suspicious_pattern',
            severity: 'medium',
            message: `Potentially suspicious pattern found: ${match}`,
            file: filename,
            pattern: pattern.toString()
          });
        });
      }
    });

    return issues;
  }

  /**
   * Validate external URLs against allowed domains
   */
  static validateExternalUrl(url: string): boolean {
    try {
      const urlObj = new URL(url);
      
      // Allow relative URLs
      if (!urlObj.protocol || urlObj.protocol === 'file:') {
        return true;
      }

      // Check against allowed domains
      return this.allowedDomainPatterns.some(pattern => 
        pattern.test(url)
      );
    } catch {
      return false;
    }
  }

  /**
   * Sanitize user input to prevent XSS
   */
  static sanitizeInput(input: string): string {
    return input
      .replace(/[<>'"&]/g, (char) => {
        switch (char) {
          case '<': return '&lt;';
          case '>': return '&gt;';
          case '"': return '&quot;';
          case "'": return '&#x27;';
          case '&': return '&amp;';
          default: return char;
        }
      });
  }

  /**
   * Generate Content Security Policy header
   */
  static generateCSP(): string {
    return [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://apis.google.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: https:",
      "connect-src 'self' https://api.openai.com https://docs.google.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'"
    ].join('; ');
  }
}

export interface SecurityIssue {
  type: 'suspicious_pattern' | 'unsafe_url' | 'missing_sanitization';
  severity: 'low' | 'medium' | 'high';
  message: string;
  file: string;
  pattern?: string;
}
