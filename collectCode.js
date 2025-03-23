
import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const fileList = [
  'src/components/ChatWindow.tsx',
  'src/components/ChatbotButton.tsx',
  'src/components/Footer.tsx',
  'src/components/ui/collapsible.tsx',
  'src/lib/constants.ts',
  'src/server/api.ts',
  'src/server/routes/chat.ts',
  'src/server/index.ts',
  'src/pages/Index.tsx',
  'src/pages/about.tsx',
  'src/data/blogPosts.json',
  'scripts/addBlog.mjs',
  '.env',
  'package.json',
  'tsconfig.json',
  '.replit',
  'README.md'
];

function collectCode() {
  let codeCollection = '';
  
  fileList.forEach(filePath => {
    try {
      const content = readFileSync(filePath, 'utf8');
      codeCollection += `\nFile: ${filePath}\n`;
      codeCollection += '```\n';
      codeCollection += content;
      codeCollection += '\n```\n';
    } catch (error) {
      codeCollection += `\nError reading ${filePath}: ${error.message}\n`;
    }
  });
  
  writeFileSync('codeCollection.txt', codeCollection);
}

collectCode();
