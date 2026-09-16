import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdownComponents from "./markdownComponents";

function AboutDocumentView({ document, view }) {
  const lines = document.content.split("\n");

  if (view === "read") {
    return (
      <div className="px-6 md:px-10 py-8 text-brown leading-relaxed">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
          {document.content}
        </ReactMarkdown>
      </div>
    );
  }

  return (
    <div className="flex min-h-full font-mono text-sm">
      <div className="bg-tan text-brown/60 text-right px-6 py-4 select-none">
        {lines.map((_, index) => (
          <div key={index} className="leading-6">{index + 1}</div>
        ))}
      </div>
      <div className="bg-paper px-4 py-4 text-brown overflow-x-auto flex-1">
        {lines.map((line, index) => (
          <div key={index} className="leading-6 whitespace-pre">
            {line || "\u00A0"}
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutDocumentView;
