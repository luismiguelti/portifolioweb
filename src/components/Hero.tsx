import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export default function Hero() {
  const techStack = ["HTML5", "CSS3", "JavaScript", "Tailwind", "Figma", "Git", "GitHub", "Python", "Banco de Dados", "React.js", "API Rest", "SQL"];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 cyber-grid opacity-20"></div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-primary rounded-full animate-glow-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.2,
          }}
        />
      ))}

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* System initializing text */}
          <p className="text-accent glow-green text-sm font-mono uppercase tracking-wider">
            &gt; INICIALIZANDO SISTEMA...
          </p>

          {/* Greeting */}
          <h2 className="text-xl md:text-2xl text-foreground/80">
            Olá, eu sou
          </h2>

          {/* Main name with gradient */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-cyber uppercase tracking-tight">
            LUIS MIGUEL
          </h1>

          {/* Role */}
          <h3 className="text-2xl md:text-4xl font-bold text-foreground uppercase tracking-wide">
            FRONT-END DEVELOPER
          </h3>

          {/* Description */}
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto">
            Criando experiências digitais{" "}
            <span className="text-primary glow-cyan">futurísticas</span> e{" "}
            <span className="text-secondary glow-magenta">interativas</span>
          </p>

          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="border-primary/50 text-primary hover:border-primary hover-glow-cyan px-4 py-2 text-sm font-mono hover:scale-[1.05] transition-transform"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-glow-magenta group hover:scale-[1.03] transition-transform"
              onClick={() => scrollToSection("projetos")}
            >
              Ver Projetos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground border-glow-cyan hover:scale-[1.03] transition-transform"
              asChild
            >
              <a href="/cv-luis-miguel.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex gap-6 justify-center pt-8 text-foreground/60 p-10">
            <a
              href="https://github.com/luismiguelti"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="h-8 w-8 hover:scale-[1.05] transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/dev-luis-miguel-xz/"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="h-8 w-8 hover:scale-[1.05] transition-transform" />
            </a>
            <a
              href="mailto:luismiguelcintrasilva180@email.com"
              className="text-foreground/60 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-8 w-8 hover:scale-[1.05] transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-primary glow-cyan" />
      </div>
    </section>
  );
}
