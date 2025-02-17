
import { promises as fs } from 'fs';
import path from 'path';

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
async function collectCode() {
  let output = '';
  
  for (const filePath of filesToCollect) {
    try {
      const stat = await fs.stat(filePath);
      if (stat.isFile()) {
        const content = await fs.readFile(filePath, 'utf8');
        output += `\nurl: rag://rag_source_${filePath}\npath: ${filePath}\n\`\`\`\n${content}\n\`\`\`\n\n`;
      }
    } catch (error) {
      console.log(`Skipping ${filePath}: ${error.message}`);
    }
  }
  
  await fs.writeFile('codeCollection.txt', output);
  console.log('Code collection complete!');
}

collectCode().catch(console.error);
