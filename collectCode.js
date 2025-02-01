
const fs = require('fs');

const filePaths = [
  'static/css/src/main.css',
  'static/css/tailwind.css',
  'tailwind.config.js',
  'postcss.config.js',
  'templates/toggle_test.html',
  'static/js/main.js',
  'templates/index.html'
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
