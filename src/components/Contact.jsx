import { useState } from "react";
import { Send, Check } from "lucide-react";

function Field({ label, type = "text", value, onChange, textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative bg-cream rounded-lg">
      <Tag
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        required
        className="peer w-full bg-transparent border-2 border-tan focus:border-brown rounded-lg px-4 pt-6 pb-2 text-brown outline-none transition resize-none"
      />
      <label className="absolute left-4 top-2 text-brown/50 text-xs transition-all pointer-events-none peer-focus:text-brown">
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 md:px-20 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-2xl font-bold text-brown mb-2">Contact</h2>
        <p className="text-brown/70">Un projet, une question ou une opportunité ? Écris-moi.</p>
      </div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-start">
        <div className="pt-2">
          <p className="text-brown text-xl font-semibold mb-3">
            Parlons de ton prochain projet.
          </p>
          <p className="text-brown/70 leading-relaxed">
            Je suis actuellement à la recherche d'une alternance en développement web ou cybersécurité et je réponds rapidement aux messages.
          </p>
        </div>

        {sent ? (
          <div className="flex items-start gap-3 text-brown">
            <Check size={20} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold mb-1">Message envoyé</p>
              <p className="text-sm text-brown/70">Merci pour ton message, je te répondrai rapidement.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <Field label="Objet" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
            <Field label="Message" textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-tan text-brown text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition"
            >
              <Send size={16} /> Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;