
const fs = require('fs');
const path = require('path');

// Array of files to collect code from
const filesToCollect = [
  'src/components/ChatbotButton.tsx',
  'src/pages/Index.tsx',
  'src/pages/aboutCourse.tsx',
  'src/pages/services.tsx',
  'src/App.tsx',
  '.env'
];

// Function to read and format file content
function collectCode() {
  let output = '';
  
  filesToCollect.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      output += `\nurl: rag://rag_source_${filePath}\npath: ${filePath}\n\`\`\`\n${content}\n\`\`\`\n\n`;
    }
  });
  
  fs.writeFileSync('codeCollection.txt', output);
  console.log('Code collection complete!');
}

collectCode();
