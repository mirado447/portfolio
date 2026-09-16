function Footer() {
  return (
    <footer className="mt-10">
      <div className="px-6 md:px-20 py-6 flex flex-col sm:flex-row items-center justify-center gap-4">
        <p className="text-brown/60 text-sm text-center">
          © {new Date().getFullYear()} Mirado. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default Footer;