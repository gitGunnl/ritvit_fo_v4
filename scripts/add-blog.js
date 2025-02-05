#!/usr/bin/env node
/**
 * scripts/add-blog.js
 *
 * Reads a blog post from blog-template.txt, extracts front matter (if provided)
 * and content, generates an ID from the title, appends the new blog post to
 * src/data/blogPosts.json, and finally empties blog-template.txt.
 *
 * Expected template format (front matter is optional):
 *
 *   Title: My Amazing Post
 *   Category: Digital Transformation
 *   ReadTime: 7 min read
 *   ImageUrl: /my-image.svg
 *   Excerpt: (optional excerpt, otherwise generated)
 *   ---
 *   # My Amazing Post
 *
 *   (Markdown content …)
 */

import { readFile, writeFile, existsSync } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// A simple slugify function
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

const templateFilePath = join(__dirname, "..", "blog-template.txt");
const blogPostsFilePath = join(__dirname, "..", "src", "data", "blogPosts.json");

// Read the template file
readFile(templateFilePath, "utf8")
  .then((data) => {
    if (!data.trim()) {
      console.log("Template file is empty. Nothing to add.");
      process.exit(0);
    }

    // Split the file into lines
    const lines = data.split("\n");
    let frontMatter = {};
    let contentStartIndex = 0;

    // If the first line starts with "Title:", we assume there is front matter.
    if (lines[0].startsWith("Title:")) {
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() === "---" || lines[i].trim() === "") {
          contentStartIndex = i + 1;
          break;
        }
        const [key, ...rest] = lines[i].split(":");
        frontMatter[key.trim().toLowerCase()] = rest.join(":").trim();
      }
    }

    // The rest of the file is the content
    const content = lines.slice(contentStartIndex).join("\n").trim();
    if (!content) {
      console.error("No content found in the template file.");
      process.exit(1);
    }

    // Get the title either from front matter or by extracting the first markdown heading (# ...)
    let title = frontMatter.title;
    if (!title) {
      const match = content.match(/^#\s+(.+)/);
      if (match) {
        title = match[1].trim();
      } else {
        console.error("No title found in front matter or content.");
        process.exit(1);
      }
    }

    // Other metadata (with defaults if not provided)
    const category = frontMatter.category || "General";
    const readTime = frontMatter.readtime || "5 min read";
    const imageUrl = frontMatter.imageurl || "/placeholder.svg";
    const excerpt =
      frontMatter.excerpt ||
      content.replace(/[#_*>\n]/g, "").slice(0, 150).trim() + "...";

    // Generate a slug from the title
    const id = slugify(title);

    // Use today's date in YYYY-MM-DD format
    const date = new Date().toISOString().slice(0, 10);

    // Build the new blog post object
    const newBlogPost = {
      id,
      title,
      excerpt,
      date,
      readTime,
      category,
      imageUrl,
      content,
    };

    // Load existing blog posts from the JSON file (or start with an empty array)
    let blogPosts = [];
    return existsSync(blogPostsFilePath)
      .then((exists) => {
        if(exists) {
          return readFile(blogPostsFilePath, "utf8");
        } else {
          return Promise.resolve('[]');
        }
      })
      .then((jsonData) => {
        blogPosts = JSON.parse(jsonData);

        // Check for duplicate IDs
        if (blogPosts.find((post) => post.id === id)) {
          console.error(`A blog post with id "${id}" already exists.`);
          process.exit(1);
        }

        // Append the new blog post and write back to the JSON file
        blogPosts.push(newBlogPost);
        return writeFile(
          blogPostsFilePath,
          JSON.stringify(blogPosts, null, 2),
          "utf8"
        );
      })
      .then(() => {
        console.log(`Blog post "${title}" added successfully!`);

        // Empty the template file
        return writeFile(templateFilePath, "", "utf8");
      })
      .then(() => {
        console.log("Template file emptied.");
      })
      .catch((err) => {
        console.error("An error occurred:", err);
        process.exit(1);
      });
  })
  .catch((err) => {
    console.error("Error reading template file:", err);
    process.exit(1);
  });