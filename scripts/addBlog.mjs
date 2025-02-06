#!/usr/bin/env node
/**
 * addBlog.mjs
 *
 * This script adds new blog posts from a template file into the system’s JSON data file.
 *
 * How to use:
 * 1. Create (or update) a file named "blog-template.txt" in the project root. In this file, you can
 *    include one or more blog posts. Each post must use YAML-style front matter (delimited by ---)
 *    followed by its HTML content. Separate multiple posts with a delimiter line that contains exactly
 *    three (or more) equals signs (e.g., "===") on a line by itself.
 *
 * Example blog post entry:
 *
 *   --- 
 *   title: "Smart Fiskeri på Færøerne: Hvordan AI Kan Sikre Fremtidens Fiskeri - Example 1"
 *   id: smart-fiskeri-example-1
 *   excerpt: "Example 1: Minimal Dark Theme with a Clean, Centered Layout"
 *   date: "2024-03-01"
 *   readTime: "8 min read"
 *   category: "Documentation"
 *   imageUrl: "/blog/fiskeri-example-1.jpg"
 *   ---
 *   <!DOCTYPE html>
 *   <html lang="da">
 *   <head>
 *     <!-- HTML content with Tailwind styling goes here -->
 *   </head>
 *   <body>
 *     <!-- ... -->
 *   </body>
 *   </html>
 *   ===
 *
 * (You can then add additional posts after the delimiter using the same format.)
 *
 * 2. Run the script using Node (ensure your package.json has "type": "module"):
 *
 *      node scripts/addBlog.mjs
 *
 * The script will:
 *   - Read the "blog-template.txt" file.
 *   - Split the content into separate posts using the delimiter (a line with "===").
 *   - For each post, parse the YAML-style front matter and HTML content.
 *   - Generate an ID (slug) from the title if no id is provided.
 *   - Append each new blog post to the JSON file at "src/data/blogPosts.json" (creating the file if needed).
 *   - Clear the template file once processing is complete.
 *
 * Enjoy adding new blog posts with custom styling!
 */

import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths for the template and JSON data
const TEMPLATE_PATH = path.join(__dirname, '../blog-template.txt');
const BLOGS_JSON_PATH = path.join(__dirname, '../src/data/blogPosts.json');

// Simple function to slugify the title (if no id provided)
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Parse a single blog post block from the template.
// Expects the block to start with YAML-style front matter delimited by --- markers.
function parseTemplate(content) {
  const lines = content.split('\n');
  if (lines[0].trim() !== '---') {
    throw new Error('Template block must start with front matter delimited by ---');
  }
  let frontMatter = {};
  let i = 1;
  // Read until the next '---'
  while (i < lines.length && lines[i].trim() !== '---') {
    const line = lines[i];
    const index = line.indexOf(':');
    if (index > -1) {
      const key = line.slice(0, index).trim();
      let value = line.slice(index + 1).trim();
      // Remove optional surrounding quotes
      value = value.replace(/^"(.*)"$/, '$1');
      frontMatter[key] = value;
    }
    i++;
  }
  // Skip the closing '---'
  i++;
  const blogContent = lines.slice(i).join('\n').trim();
  return { frontMatter, blogContent };
}

async function addBlogPosts() {
  // Read the template file.
  let templateContent;
  try {
    templateContent = await fs.readFile(TEMPLATE_PATH, 'utf-8');
  } catch (err) {
    console.error(`Error reading ${TEMPLATE_PATH}:`, err);
    process.exit(1);
  }

  if (!templateContent.trim()) {
    console.log('No blog post content found in template. Exiting.');
    return;
  }

  // Split the template content into individual post blocks.
  // The delimiter is a line containing three or more equals signs.
  const postBlocks = templateContent.split(/\n\s*===+\s*\n/);
  if (!postBlocks.length) {
    console.log('No valid post blocks found in the template. Exiting.');
    return;
  }

  // Read the existing JSON data (if the file does not exist, start with an empty array)
  let blogPosts = [];
  try {
    const jsonData = await fs.readFile(BLOGS_JSON_PATH, 'utf-8');
    blogPosts = JSON.parse(jsonData);
  } catch (err) {
    console.warn(`Could not read ${BLOGS_JSON_PATH} (it may not exist yet). Starting with an empty array.`);
  }

  let newPostsCount = 0;
  for (const block of postBlocks) {
    const trimmedBlock = block.trim();
    if (!trimmedBlock) continue;

    let frontMatter, blogContent;
    try {
      ({ frontMatter, blogContent } = parseTemplate(trimmedBlock));
    } catch (err) {
      console.error('Error parsing a post block:', err);
      continue;
    }

    // Ensure required fields are present.
    const requiredFields = ['title', 'excerpt', 'date', 'readTime', 'category', 'imageUrl'];
    const missingField = requiredFields.find(field => !frontMatter[field]);
    if (missingField) {
      console.error(`Missing required field in front matter: ${missingField}. Skipping this post.`);
      continue;
    }
    if (!frontMatter.id) {
      frontMatter.id = slugify(frontMatter.title);
      console.log(`No id provided. Generated id: ${frontMatter.id}`);
    }

    // Check if a post with the same id already exists.
    if (blogPosts.find((post) => post.id === frontMatter.id)) {
      console.error(`A blog post with id "${frontMatter.id}" already exists. Skipping this post.`);
      continue;
    }

    // Build the new blog post object.
    const newBlogPost = {
      id: frontMatter.id,
      title: frontMatter.title,
      excerpt: frontMatter.excerpt,
      date: frontMatter.date,
      readTime: frontMatter.readTime,
      category: frontMatter.category,
      imageUrl: frontMatter.imageUrl,
      content: blogContent,
    };

    blogPosts.push(newBlogPost);
    newPostsCount++;
    console.log(`Added blog post "${newBlogPost.title}".`);
  }

  // Write the updated JSON data if any new posts were added.
  if (newPostsCount > 0) {
    try {
      await fs.writeFile(BLOGS_JSON_PATH, JSON.stringify(blogPosts, null, 2), 'utf-8');
      console.log(`Successfully added ${newPostsCount} new blog post(s) to ${BLOGS_JSON_PATH}`);
    } catch (err) {
      console.error('Error writing to JSON file:', err);
      process.exit(1);
    }
  } else {
    console.log('No new posts were added.');
  }

  // Clear the template file.
  try {
    await fs.writeFile(TEMPLATE_PATH, '', 'utf-8');
    console.log(`Template file ${TEMPLATE_PATH} cleared.`);
  } catch (err) {
    console.error('Error clearing the template file:', err);
    process.exit(1);
  }
}

addBlogPosts();
