import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="py-12 border-t border-primary/20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-primary text-2xl font-mono">&lt;/&gt;</span>
                <span className="text-xl font-bold text-gradient-cyber">LUIS MIGUEL</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Front-end Developer especializado em criar experiências digitais
                futurísticas e interativas.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary">Links Rápidos</h3>
              <div className="grid grid-cols-2 gap-2">
                {["Início", "Sobre", "Skills", "Projetos", "Contato"].map((link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 hover:text-primary transition-colors text-sm"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary border-b border-primary/20 pb-2">Redes Sociais</h3>
              <div className="flex gap-4 ">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="p-3 rounded-xl bg-card/50 border border-primary/20 hover:border-primary hover:bg-primary/10 transition-all hover-glow-cyan"
                  >
                    <social.icon className="h-5 w-5 text-primary"/>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 border-t border-primary/20 flex flex-col md:flex-row justify-center items-center gap-4 ">
            <p className="text-foreground/60 text-sm">
              © {currentYear} Luis Miguel. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
