import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-serif text-lg text-secondary">A Life of Service</p>
            <p className="text-sm text-primary-foreground/70 mt-1">
              Honoring a lifetime of dedication to education
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/about" className="hover:text-secondary transition-colors">
              About
            </Link>
            <Link to="/gallery" className="hover:text-secondary transition-colors">
              Gallery
            </Link>
            <Link to="/tributes" className="hover:text-secondary transition-colors">
              Tributes
            </Link>
            <Link to="/contact" className="hover:text-secondary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-1 text-sm text-primary-foreground/70">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-secondary fill-secondary" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
