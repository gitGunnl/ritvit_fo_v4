
import fs from 'fs';
import path from 'path';

// Function to check if file content has HTML with inline color styles
function hasInlineColorStyles(content) {
  // Check for CSS color properties in style tags or inline styles
  const colorPattern = /(color|background|border):\s*(#[a-fA-F0-9]{3,6}|rgb|rgba|hsl|hsla)/;
  return content.includes('<style>') && colorPattern.test(content);
}

// Function to recursively get all files in directory
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      arrayOfFiles.push(filePath);
    }
  });

  return arrayOfFiles;
}

// Get all files
const allFiles = getAllFiles('.');

// Filter and check files
let outputContent = '# Files with inline color styling:\n\n';
let fileCount = 0;

allFiles.forEach(filePath => {
  try {
    // Skip node_modules and .git directories
    if (filePath.includes('node_modules') || filePath.includes('.git')) {
      return;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    if (hasInlineColorStyles(content)) {
      fileCount++;
      outputContent += `### ${filePath}\n\`\`\`\n${content}\n\`\`\`\n\n`;
    }
  } catch (err) {
    console.error(`Error reading file ${filePath}:`, err);
  }
});

outputContent = `Found ${fileCount} files with inline color styling.\n\n` + outputContent;

try {
  fs.writeFileSync('colorStyles.txt', outputContent);
  console.log('Color styles scan complete! Check colorStyles.txt');
} catch (err) {
  console.error('Error writing output file:', err);
}
