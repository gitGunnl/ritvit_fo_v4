import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface BlogSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const BlogSearch = ({ searchQuery, setSearchQuery }: BlogSearchProps) => {
  return (
    <div className="flex-grow relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text/60" />
      <Input
        type="text"
        placeholder="Search articles..."
        className="
          pl-10
          bg-primary/10
          border
          border-border
          text-text
          placeholder:text-text/60
          focus:ring-primary
        "
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default BlogSearch;
