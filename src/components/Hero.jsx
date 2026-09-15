import me from "../assets/me.png";

function Hero() {
  return (
    <section className="px-6 md:px-32 pt-24 pb-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="text-center md:text-left">
        <h1 className="font-khand font-semibold leading-tight text-brown mb-4">
          <span className="block whitespace-nowrap text-2xl sm:text-3xl md:text-4xl">
            Mirado Radintsoa RAHARINAIVOSOA
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl">
            Développeur full-stack
          </span>
        </h1>
        <p className="w-full text-brown text-base md:text-lg mb-8">
          Développeur full-stack passionné par la construction d'applications robustes,
          avec une attention particulière portée à la sécurité — actuellement en M1 Infrastructures et Cybersécurité.
        </p>

        <a
          href="#project"
          className="inline-block border-2 border-brown text-brown text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-brown hover:text-cream transition"
        >
          Voir mes projets ↓
        </a>
      </div>

      <img src={me} alt="Mirado" className="w-80 md:w-[28rem] shrink-0" />
    </section>
  );
}

export default Hero;