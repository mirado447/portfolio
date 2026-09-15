import { Mail } from "lucide-react";
import githubIcon from "../assets/stack/github.png";

function Footer() {
  return (
    <footer className="mt-10">
      <div className="px-6 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-brown/60 text-sm">
          © {new Date().getFullYear()} Mirado. Tous droits réservés.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/mirado447" target="_blank" rel="noreferrer" className="hover:opacity-70">
            <img src={githubIcon} alt="GitHub" className="w-[18px] h-[18px]" />
          </a>
          <a href="mailto:ton.email@exemple.com" className="text-brown hover:opacity-70">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;