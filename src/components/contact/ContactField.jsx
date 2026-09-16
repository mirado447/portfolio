function ContactField({ label, type = "text", value, onChange, textarea }) {
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

export default ContactField;
