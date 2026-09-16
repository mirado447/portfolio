import { useState } from "react";
import { Send, Check } from "lucide-react";
import lettre from "../assets/lettre.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import linkedInIcon from "../assets/In.png";
import githubIcon from "../assets/stack/github.png";

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

  const contactCards = [
    {
      label: "Email",
      value: "miradorah@gmail.com",
      href: "mailto:miradorah@gmail.com",
      icon: emailIcon,
      external: false,
    },
    {
      label: "Téléphone",
      value: "+261 34 88 809 82",
      href: "tel:+261348880982",
      icon: phoneIcon,
      external: false,
    },
    {
      label: "GitHub",
      value: "mirado447",
      href: "https://github.com/mirado447",
      icon: githubIcon,
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Mirado Radintsoa",
      href: "https://www.linkedin.com/in/mirado-radintsoa-raharinaivosoa-b21283266/",
      icon: linkedInIcon,
      external: true,
    },
  ];

  return (
    <section id="contact" className="px-6 md:px-20 pt-8 pb-20 scroll-mt-16">
      <div className="mb-8 text-center">
        <h2 className="font-khand text-4xl font-normal text-brown mb-2">Contact</h2>
        <p className="text-brown/70">Un projet, une question ou une opportunité ? Contactez-moi.</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-8 mb-12">
        {contactCards.map(({ label, value, href, icon, external }) => {
          const content = (
            <>
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ddb892] text-brown overflow-hidden">
                  <img src={icon} alt={label} className="h-6 w-6 object-contain" />
                </div>
                <div className="min-w-0 select-text">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-brown/60">{label}</p>
                  <p className="mt-0.5 text-sm font-medium text-brown break-words">{value}</p>
                </div>
              </div>
            </>
          );

          if (external) {
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-xl border border-brown/15 bg-white/40 p-3 transition hover:-translate-y-0.5"
              >
                {content}
              </a>
            );
          }

          return (
            <div
              key={label}
              className="block rounded-xl border border-brown/15 bg-white/40 p-3 transition"
            >
              {content}
            </div>
          );
        })}
      </div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-start">
        <div className="pt-2">
          <p className="text-brown text-xl font-semibold mb-3">
            Parlons de ton prochain projet.
          </p>
          <p className="text-brown/70 leading-relaxed">
            Actuellement à la recherche d'une alternance en développement et sécurité applicative, je reste à votre disposition pour toute question ou opportunité.
          </p>
          <img src={lettre} alt="Illustration d'une lettre" className="letter-hover w-full max-w-56 mx-auto mt-6" />
        </div>

        {sent ? (
          <div className="flex items-start gap-3 text-brown">
            <Check size={20} className="mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold mb-1">Message envoyé</p>
              <p className="text-sm text-brown/70">Merci pour votre message, je vous répondrai rapidement.</p>
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