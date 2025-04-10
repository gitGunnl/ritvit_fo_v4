
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeExternalLinks from "rehype-external-links";

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = "" }) => {
  return (
    <div className={`prose prose-invert max-w-none ${className}`}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[[rehypeExternalLinks, { target: "_blank", rel: ["noopener", "noreferrer"] }]]}
        components={{
          h1: ({ node, ...props }) => <h1 className="text-2xl font-bold text-primary mt-4 mb-3" {...props} />,
          h2: ({ node, ...props }) => <h2 className="text-xl font-semibold text-accent mt-4 mb-2" {...props} />,
          h3: ({ node, ...props }) => <h3 className="text-lg font-semibold mt-3 mb-2" {...props} />,
          strong: ({ node, ...props }) => <strong className="font-bold text-primary/90" {...props} />,
          p: ({ node, ...props }) => <p className="mb-4 text-text/90 leading-relaxed" {...props} />,
          a: ({ node, ...props }) => (
            <a 
              className="text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent transition-all" 
              {...props} 
            />
          ),
          ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-1 ml-4 mb-4" {...props} />,
          li: ({ node, ...props }) => <li className="text-text/80" {...props} />,
          blockquote: ({ node, ...props }) => (
            <blockquote className="border-l-4 border-primary/50 pl-4 italic text-text/70 my-4" {...props} />
          ),
          code: ({ node, inline, ...props }) => 
            inline ? 
              <code className="bg-primary/10 px-1.5 py-0.5 rounded text-primary/90 font-mono text-sm" {...props} /> : 
              <code className="block bg-primary/10 p-4 rounded-md font-mono text-sm overflow-x-auto my-4" {...props} />,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
