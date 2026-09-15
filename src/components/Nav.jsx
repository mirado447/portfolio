import RRM from "../assets/RRM.png";

function Nav() {
  const links = ["About", "Project", "Stack", "Contact"];

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-3">
      <a
        href="#top"
        className="flex items-center gap-2 bg-tan text-brown text-sm font-medium px-3.5 py-1.5 rounded-lg hover:opacity-90 transition"
      >
        <img src={RRM} alt="Logo RRM" className="w-9 h-7 object-cover" />
        <span>RRM</span>
      </a>

      <div className="hidden md:flex gap-8">
        {links.map((item) => (
        <a 
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-brown text-sm font-medium hover:opacity-70 transition"
          >
            {item}
          </a>
        ))}
      </div>

      <a
        href="/cv-mirado.pdf"
        download
        className="bg-tan text-brown text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition"
      >
        Télécharger mon CV
      </a>
    </nav>
  );
}

export default Nav;