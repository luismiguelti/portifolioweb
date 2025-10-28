import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Skills = () => {
  const titleAnimation = useScrollAnimation();
  const descAnimation = useScrollAnimation();

  const skillCategories = [
    {
      title: "Linguagens & Tecnologias",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "API Rest", "SQL"],
      color: "cyan",
    },
    {
      title: "Ferramentas & Design",
      skills: ["Figma", "Git", "GitHub", "Responsive Design"],
      color: "magenta",
    },
    {
      title: "Hard Skills",
      skills: ["Data Center", "UI/UX Design", "Prototipagem", "Debugging", "Performance Optimization"],
      color: "green",
    },
    {
      title: "Soft Skills",
      skills: ["Comunicação", "Trabalho em Equipe", "Resolução de Problemas", "Criatividade"],
      color: "cyan",
    },
  ];

  const getColorClass = (color: string) => {
    switch (color) {
      case "cyan":
        return "border-primary/50 text-primary hover:border-primary";
      case "magenta":
        return "border-secondary/50 text-secondary hover:border-secondary";
      case "green":
        return "border-accent/50 text-accent hover:border-accent";
      default:
        return "border-primary/50 text-primary hover:border-primary";
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`scroll-reveal ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-primary glow-cyan font-mono">&lt;HABILIDADES /&gt;</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const cardAnimation = useScrollAnimation();
            return (
              <div
                key={index}
                ref={cardAnimation.ref}
                className={`scroll-reveal-scale ${cardAnimation.isVisible ? 'visible' : ''}`}
              >
                <Card className="bg-card/50 border-primary/20 hover:border-primary transition-all duration-300 rounded-2xl card-hover cursor-pointer border-animated h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-gradient-green font-mono">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className={`${getColorClass(category.color)} px-3 py-1 font-mono text-xs rounded-full transition-all duration-300 hover:scale-110 cursor-pointer`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div 
          ref={descAnimation.ref}
          className={`scroll-reveal ${descAnimation.isVisible ? 'visible' : ''}`}
        >
          <Card className="max-w-4xl mx-auto bg-card/50 border-primary/20 rounded-2xl">
            <CardContent className="p-8">
              <p className="text-center text-foreground/70 leading-relaxed">
                Desenvolvedor front-end apaixonado por criar interfaces modernas e funcionais.
                Combinando conhecimento técnico sólido com criatividade e foco na experiência
                do usuário para entregar soluções digitais de alta qualidade.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
