import { useState } from "react";
import { BookOpenText } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import info from "../assets/info.png";
import fileView from "../assets/file.png";

const documents = {
  about: {
    label: "About",
    fileName: "ABOUT.md",
    content: `# Qui je suis

**Développeur full-stack** basé à Antananarivo, Madagascar.

Diplômé d'une **Licence en développement web** (HEI), je poursuis actuellement un **M1 Infrastructures et Cybersécurité** à l'ESTI.

## Mon approche

> Construire des applications complètes, de la base de données à l'interface, en intégrant la sécurité comme partie du développement, pas comme une étape ajoutée après coup.

Concrètement, cela se traduit par :

- Authentification robuste
- Hashing des mots de passe
- Gestion des secrets
- Isolation des données

## Ma stack

| Côté | Technologies |
| --- | --- |
| Back-end | \`Java / Spring Boot\`, \`Python / FastAPI\` |
| Front-end | \`React\` |

## Ce que je recherche

Je recherche une **alternance** où je peux mettre à profit cette double compétence : **développement** et **sécurité applicative**.`,
  },
  journey: {
    label: "Journey",
    fileName: "JOURNEY.md",
    content: `# Mon parcours

### 🎓 Licence en développement web, *HEI*

Spécialisation **Écosystème logiciel**.

### 💼 Stage de fin de Licence, *3 mois*

**Développeur back-end** sur un projet de gestion d'école.

Mission principale : **automatisation de processus administratifs**.

### 🎓 M1 Infrastructures et Cybersécurité, *ESTI* \`en cours\`

Approfondissement des **fondamentaux de la sécurité des systèmes**.`,
  },
  experience: {
    label: "Experience",
    fileName: "EXPERIENCE.md",
    content: `# Expérience & Projets

## 🏫 Stage développeur back-end

**Projet de gestion d'école** · *3 mois*

Automatisation de processus administratifs.

---

## 🔐 Keyra, *Projet le plus abouti*

Plateforme d'**authentification-as-a-service multi-tenant**.

- Backend **FastAPI**
- Authentification par **JWT**
- **Isolation des données** par application
- Dashboard **React**
- ✅ **Déployé en production**

---

## 👥 API de gestion d'employés

**CRUD complet** en **Spring Boot**.

---

## 🛡️ Travaux pratiques cryptographie / PKI

- Implémentations **AES**, **RSA**
- Inspection de **certificats TLS**
- Mise en place d'une **PKI complète** (autorité de certification + serveur)

---

## 🤝 Contributions en équipe

Développement d'**endpoints REST** et de **tests unitaires** sur des projets collaboratifs :

- API de blog
- API d'administration scolaire`,
  },
};

const markdownComponents = {
  h1: ({ children }) => <h3 className="text-2xl font-semibold mb-5">{children}</h3>,
  h2: ({ children }) => <h4 className="text-xl font-semibold mt-7 mb-3">{children}</h4>,
  h3: ({ children }) => <h5 className="text-lg font-semibold mt-6 mb-2">{children}</h5>,
  p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
  ul: ({ children }) => <ul className="list-disc pl-5 space-y-1 mb-4">{children}</ul>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-tan pl-4 italic text-brown/75 mb-4">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="border-tan/70 my-6" />,
  table: ({ children }) => (
    <div className="overflow-x-auto mb-4">
      <table className="w-full text-left border-collapse">{children}</table>
    </div>
  ),
  th: ({ children }) => <th className="border-b-2 border-tan px-3 py-2 font-semibold">{children}</th>,
  td: ({ children }) => <td className="border-b border-tan/60 px-3 py-2">{children}</td>,
};

function About() {
  const [view, setView] = useState("read");
  const [activeDocument, setActiveDocument] = useState("about");
  const document = documents[activeDocument];
  const lines = document.content.split("\n");

  return (
    <section id="about" className="px-6 md:px-20 pt-4 pb-16">
      <h2 className="font-khand text-4xl font-normal text-brown mb-6 text-center">About</h2>

      <div className="rounded-2xl overflow-hidden bg-paper">
        <div className="flex items-center justify-between gap-4 bg-paper px-4 py-2.5">
          <span className="flex items-center gap-2 text-brown text-sm font-medium">
            <img src={info} alt="" className="w-4 h-4 object-contain" />
            {document.fileName}
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

        <div className="flex gap-1 border-t border-tan/40 bg-paper px-4 pt-2 overflow-x-auto">
          {Object.entries(documents).map(([key, item]) => (
            <button
              key={key}
              onClick={() => setActiveDocument(key)}
              className={`shrink-0 px-4 py-2 text-sm font-medium rounded-t-lg transition ${
                activeDocument === key
                  ? "bg-cream text-brown"
                  : "text-brown/60 hover:text-brown hover:bg-cream/50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="h-[24rem] overflow-y-auto">
          {view === "read" ? (
            <div className="px-6 md:px-10 py-8 text-brown leading-relaxed">
              <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
                {document.content}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="flex min-h-full font-mono text-sm">
              <div className="bg-tan text-brown/60 text-right px-6 py-4 select-none">
                {lines.map((_, i) => (
                  <div key={i} className="leading-6">{i + 1}</div>
                ))}
              </div>
              <div className="bg-paper px-4 py-4 text-brown overflow-x-auto flex-1">
                {lines.map((line, i) => (
                  <div key={i} className="leading-6 whitespace-pre">
                    {line || "\u00A0"}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;