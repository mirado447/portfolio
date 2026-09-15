import { useState } from "react";
import { BookOpenText } from "lucide-react";
import info from "../assets/info.png"
import fileView from "../assets/file.png";

const aboutLines = [
  "## Développeur full-stack basé à Antananarivo, Madagascar.",
  "",
  "Diplômé d'une Licence en développement web (HEI), je poursuis",
  "actuellement un M1 Infrastructures et Cybersécurité à l'ESTI,",
  "en co-diplomation avec ESIEE-IT.",
  "",
  "Mon approche : construire des applications complètes — de la",
  "base de données à l'interface — en intégrant la sécurité comme",
  "partie du développement, pas comme une étape ajoutée après coup.",
  "",
  "### Je recherche une alternance où je peux mettre cette double",
  "compétence à profit.",
];

function About() {
  const [view, setView] = useState("read");

  return (
    <section id="about" className="px-6 md:px-20 py-16">
      <h2 className="text-2xl font-bold text-brown mb-6 text-center">About</h2>

      <div className="rounded-2xl overflow-hidden bg-paper">
        <div className="flex items-center justify-between bg-paper px-4 py-2.5">
          <span className="flex items-center gap-2 text-brown text-sm font-medium">
            <img src={info} alt="" className="w-4 h-4 object-contain" />
            ABOUT.md
          </span>
          <button
            onClick={() => setView(view === "read" ? "file" : "read")}
            className="flex items-center gap-1.5 text-brown text-xs font-medium bg-cream/60 hover:bg-cream px-3 py-1.5 rounded-lg transition"
          >
            {view === "read" ? (
              <><img src={fileView} alt="" className="w-4 h-4 object-contain" /> Voir le fichier</>
            ) : (
              <><BookOpenText size={14} /> Voir la lecture</>
            )}
          </button>
        </div>

        {view === "read" ? (
          <div className="px-6 md:px-10 py-8 space-y-5 text-brown leading-relaxed">
            <p className="text-lg font-semibold">
              Développeur full-stack basé à Antananarivo, Madagascar.
            </p>
            <p>
              Diplômé d'une Licence en développement web (HEI), je poursuis
              actuellement un M1 Infrastructures et Cybersécurité à l'ESTI,
              en co-diplomation avec ESIEE-IT.
            </p>
            <p>
              Pendant mon stage de fin de Licence, j'ai développé le back-end
              d'un projet de gestion d'école (automatisation des processus
              administratifs, notamment l'envoi d'emails). J'ai depuis
              construit des API REST en Java / Spring Boot avec PostgreSQL,
              et je pratique la cryptographie appliquée (PKI, OpenSSL,
              certificats TLS) dans le cadre de mon M1.
            </p>
            <p>
              Mon approche : construire des applications complètes — de la
              base de données à l'interface — en intégrant la sécurité comme
              partie du développement, pas comme une étape ajoutée après coup.
            </p>
            <p className="font-medium">
              Je recherche une alternance en Développement Web ou
              Cybersécurité où je peux mettre cette double compétence à
              profit.
            </p>
          </div>
        ) : (
          <div className="flex font-mono text-sm">
            <div className="bg-tan text-brown/60 text-right px-6 py-4 select-none">
              {aboutLines.map((_, i) => (
                <div key={i} className="leading-6">{i + 1}</div>
              ))}
            </div>
            <div className="bg-paper px-4 py-4 text-brown overflow-x-auto flex-1">
              {aboutLines.map((line, i) => (
                <div key={i} className="leading-6 whitespace-pre">
                  {line || "\u00A0"}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default About;