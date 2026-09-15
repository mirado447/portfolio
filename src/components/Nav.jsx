import RRM from "../assets/RRM.png";

function Nav() {
  const links = ["About", "Project", "Stack", "Contact"];

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-3">
      <img src={RRM} alt="Logo" className="w-10 h-10 rounded-xl object-cover" />

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
        className="bg-tan text-brown text-sm font-medium px-4 py-2 rounded-lg hover:opacity-90 transition"
      >
        Télécharger mon CV
      </a>
    </nav>
  );
}

export default Nav;