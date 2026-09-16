import { useState } from "react";
import { Send, Check } from "lucide-react";
import lettre from "../assets/lettre.png";
import ContactCard from "./contact/ContactCard";
import ContactField from "./contact/ContactField";
import contactCards from "./contact/contactData";

const initialForm = { email: "", subject: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const trimmedEmail = form.email.trim();
    const trimmedSubject = form.subject.trim();
    const trimmedMessage = form.message.trim();

    if (!trimmedEmail || !trimmedSubject || !trimmedMessage) {
      return "Veuillez remplir tous les champs.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      return "Veuillez entrer une adresse email valide.";
    }

    if (trimmedSubject.length < 3) {
      return "L'objet doit contenir au moins 3 caractères.";
    }

    if (trimmedMessage.length < 10) {
      return "Le message doit contenir au moins 10 caractères.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSent(false);
      return;
    }

    setError("");
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("email", form.email.trim());
    formData.append("subject", form.subject.trim());
    formData.append("message", form.message.trim());

    try {
      const response = await fetch("https://formsubmit.co/ajax/miradorah@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      setSent(true);
      setForm(initialForm);
    } catch {
      setSent(false);
      setError("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field) => (event) => {
    setForm((currentForm) => ({ ...currentForm, [field]: event.target.value }));
  };

  return (
    <section id="contact" className="px-6 md:px-20 pt-8 pb-20 scroll-mt-16">
      <div className="mb-8 text-center">
        <h2 className="font-khand text-4xl font-normal text-brown mb-2">Contact</h2>
        <p className="text-brown/70">Un projet, une question ou une opportunité ? Contactez-moi.</p>
      </div>

      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-3 mt-8 mb-12">
        {contactCards.map((contact) => (
          <ContactCard key={contact.label} contact={contact} />
        ))}
      </div>

      <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-16 items-start">
        <div className="pt-2">
          <p className="text-brown text-xl font-semibold mb-3">Parlons de ton prochain projet.</p>
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
            <ContactField label="Email" type="email" value={form.email} onChange={updateField("email")} />
            <ContactField label="Objet" value={form.subject} onChange={updateField("subject")} />
            <ContactField label="Message" textarea value={form.message} onChange={updateField("message")} />

            {error ? (
              <p className="text-sm text-red-700 bg-red-100 border border-red-200 rounded-lg px-3 py-2">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 bg-tan text-brown text-sm font-medium px-5 py-2.5 rounded-lg hover:opacity-90 transition disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <Send size={16} />
              {isSubmitting ? "Envoi..." : "Envoyer"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
