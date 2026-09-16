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

export default markdownComponents;
