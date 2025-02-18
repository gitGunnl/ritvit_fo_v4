
const fs = require('fs');
const path = require('path');

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

function collectCode() {
  let output = '';
  
  filesToCollect.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      output += `\nurl: rag://rag_source_${filePath}\npath: ${filePath}\n\`\`\`\n`;
      output += fs.readFileSync(filePath, 'utf8');
      output += '\n\`\`\`\n\n';
    }
  });
  
  fs.writeFileSync('codeCollection.txt', output);
}

collectCode();
