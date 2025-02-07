import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Brand</h3>
            <p className="text-text/80">
              Creating exceptional digital experiences through innovative
              solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text/80 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text/80 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-text/80 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-text/80 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-text/80 hover:text-primary">
                Twitter
              </a>
              <a href="#" className="text-text/80 hover:text-primary">
                LinkedIn
              </a>
              <a href="#" className="text-text/80 hover:text-primary">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-text/60">
            © {new Date().getFullYear()} Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
