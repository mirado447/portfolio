import { useState } from "react";
import { Send, Check } from "lucide-react";

function Field({ label, type = "text", value, onChange, textarea }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <Tag
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" "
        rows={textarea ? 4 : undefined}
        className="peer w-full bg-cream border-2 border-tan focus:border-brown rounded-lg px-4 pt-5 pb-2 text-brown outline-none transition resize-none"
      />
      <label className="absolute left-4 top-3.5 text-brown/50 text-sm transition-all pointer-events-none peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-brown peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs">
        {label}
      </label>
    </div>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="px-6 md:px-16 py-16">
      <h2 className="text-2xl font-bold text-brown mb-10 text-center">Contact</h2>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="text-brown text-lg mb-3">
            En recherche d'alternance Développement Web / Cybersécurité.
          </p>
          <p className="text-brown/70">
            N'hésitez pas à me contacter — je réponds rapidement.
          </p>
        </div>

        {sent ? (
          <div className="flex items-center gap-2 text-brown bg-tan/40 rounded-lg px-4 py-4">
            <Check size={18} /> Message envoyé, merci !
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <Field label="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <Field label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
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