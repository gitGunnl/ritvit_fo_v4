import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Heim", path: "/" },
    { name: "Um okkum", path: "/about" },
    { name: "Tænastur", path: "/services" },
    { name: "Samband", path: "/contact" },
  ];

  return (
    <nav className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/logos/logo-header.png"
                alt="Logo"
                className="h-10"
                width="auto"
                height="40"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-text/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button className="hover-lift bg-primary hover:bg-primary/80 text-text border border-primary/50">
              Býrja nú!
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center gap-2">
            <Link to="/contact">
              <Button variant="ghost" className="text-text/80 hover:text-primary">
                Samband
              </Button>
            </Link>
            <Button className="hover-lift bg-primary hover:bg-primary/80 text-text border border-primary/50">
              Býrja nú!
            </Button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text/60 hover:text-text focus:outline-none ml-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 border-b border-border">
            {navItems.map((item, index) => (
              <Link
                key={`nav-item-${index}`}
                to={item.path}
                className="block px-3 py-2 text-text/80 hover:text-text transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full mt-4 bg-primary hover:bg-primary/80 text-text border border-primary/50">
              Býrja nú!
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
