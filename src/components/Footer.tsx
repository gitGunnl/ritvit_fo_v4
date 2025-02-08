import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
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
            <p className="text-text/80">
              Ritvit serfrøði í verðinsklassa í Føroyum.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-text/80 hover:text-primary">
                  Um okkum
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-text/80 hover:text-primary">
                  Tænastur
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-text/80 hover:text-primary">
                  Samband
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-text/80 hover:text-primary">
                  Privatlívs politik
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
            <div className="space-y-2">
              <p className="text-text/80">
                <strong>Telefon:</strong>{" "}
                <a href="tel:+298919444" className="hover:text-primary">
                  +298 919444
                </a>
              </p>
              <p className="text-text/80">
                <strong>E-mail:</strong>{" "}
                <a href="mailto:info@ritvit.fo" className="hover:text-primary">
                  info@ritvit.fo
                </a>
              </p>
              <p className="text-text/80">
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61557593776267"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tøkni Tænastan
                </a>
              </p>
              <p className="text-text/80">
                <strong>LinkedIn:</strong>{" "}
                <a
                  href="https://linkedin.com/company/tøkni-tænastan"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tøkni Tænastan
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-text/60">
            © {new Date().getFullYear()} Tøkni Tænastan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
