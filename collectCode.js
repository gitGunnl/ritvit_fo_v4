
import { promises as fs } from 'fs';
import path from 'path';

const filesToCollect = [
  // Frontend chat components
  'src/components/ChatWindow.tsx',
  'src/components/ChatbotButton.tsx',
  
  // Backend API files
  'src/server/api.ts',
  'src/server/index.ts',
  
  // Configuration files
  'vite.config.ts',
  
  // Main app files that integrate chat
  'src/App.tsx',
  'src/main.tsx',
  
  // Constants and utils that might affect chat
  'src/lib/constants.ts',
  'src/lib/utils.ts'
];

async function collectCode() {
  let output = '';
  
  for (const filePath of filesToCollect) {
    if (await fs.access(filePath).then(() => true).catch(() => false)) {
      output += `\nurl: rag://rag_source_${filePath}\npath: ${filePath}\n\`\`\`\n`;
      output += await fs.readFile(filePath, 'utf8');
      output += '\n\`\`\`\n\n';
    }
  }
  
  await fs.writeFile('codeCollection.txt', output);
}

collectCode();
