import { Button } from "@/components/ui/button";

interface BlogCategoriesProps {
  categories: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const BlogCategories = ({ categories, selectedCategory, setSelectedCategory }: BlogCategoriesProps) => {
  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        onClick={() => setSelectedCategory(null)}
        className="hover-lift"
      >
        All
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => setSelectedCategory(category)}
          className="hover-lift"
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default BlogCategories;