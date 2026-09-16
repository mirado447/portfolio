import { useState } from "react";
import { BookOpenText } from "lucide-react";
import info from "../assets/info.png";
import fileView from "../assets/file.png";
import AboutDocumentView from "./about/AboutDocumentView";
import documents from "./about/aboutData";

function About() {
  const [view, setView] = useState("read");
  const [activeDocument, setActiveDocument] = useState("about");
  const document = documents[activeDocument];

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
          <AboutDocumentView document={document} view={view} />
        </div>
      </div>
    </section>
  );
}

export default About;
