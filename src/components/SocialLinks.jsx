const socialLinks = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "YouTube", href: "https://youtube.com" },
  { label: "Email", href: "mailto:hello@anupacj.com" },
];

const SocialLinks = () => {
  return (
    <div className="social-links">
      {socialLinks.map((link) => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
          {link.label}
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
