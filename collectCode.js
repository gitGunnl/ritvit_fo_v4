
import fs from 'fs';

const filePaths = [
  'src/pages/Index.tsx',
  'src/pages/not-found.tsx',
  'src/components/ChatbotButton.tsx',
  'src/components/blog/BlogCategories.tsx',
  'src/components/blog/BlogSearch.tsx'
];

let outputContent = '';

filePaths.forEach(filePath => {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        outputContent += `### ${filePath}\n\`\`\`\n${content}\n\`\`\`\n\n`;
    } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
    }
});

try {
    fs.writeFileSync('codeCollection.txt', outputContent);
    console.log('Code collection complete! Check codeCollection.txt');
} catch (err) {
    console.error('Error writing output file:', err);
}
