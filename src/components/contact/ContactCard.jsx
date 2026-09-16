function ContactCard({ contact }) {
  const content = (
    <div className="flex items-center gap-2.5">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ddb892] text-brown overflow-hidden">
        <img src={contact.icon} alt={contact.label} className="h-6 w-6 object-contain" />
      </div>
      <div className="min-w-0 select-text">
        <p className="text-[10px] uppercase tracking-[0.18em] text-brown/60">{contact.label}</p>
        <p className="mt-0.5 text-sm font-medium text-brown break-words">{contact.value}</p>
      </div>
    </div>
  );

  if (!contact.external) {
    return (
      <div className="block rounded-xl border border-brown/15 bg-white/40 p-3 transition">
        {content}
      </div>
    );
  }

  return (
    <a
      href={contact.href}
      target="_blank"
      rel="noreferrer"
      className="group block rounded-xl border border-brown/15 bg-white/40 p-3 transition hover:-translate-y-0.5"
    >
      {content}
    </a>
  );
}

export default ContactCard;
