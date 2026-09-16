import RRM from "../assets/RRM.png";

function Nav() {
  const links = ["About", "Project", "Stack", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-cream px-4 md:px-6 py-3">
      <a
        href="#top"
        className="flex aspect-square h-10 items-center justify-center rounded-lg bg-tan p-1.5 hover:opacity-90 transition"
      >
        <img src={RRM} alt="Logo" className="h-full w-full object-contain" />
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
        href="/CV Professionnel Dev&Secu.pdf"
        download
        className="bg-tan text-brown text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition"
      >
        Télécharger mon CV
      </a>
    </nav>
  );
}

export default Nav;