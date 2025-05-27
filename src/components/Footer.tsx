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
              Vitlíki serfrøði í verðinsklassa í Føroyum.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text">Vitlíkisstovan</h3>
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
            <h3 className="text-lg font-semibold text-text">Annað</h3>
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
            <h3 className="text-lg font-semibold text-text">Samband</h3>
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
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61557593776267"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/company/tøkni-tænastan"
                  className="hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-8 h-8 text-primary"
                  >
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-text/60">
            © {new Date().getFullYear()} Vitlíkisstovan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
