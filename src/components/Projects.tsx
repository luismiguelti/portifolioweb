import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const titleAnimation = useScrollAnimation();

  const projects = [
    {
      title: "FitMentoria ",
      description: "Landing page para FitMentoria, focada em nutrição e saúde.",
      image: "https://www.fiberoficial.com.br/cdn/shop/articles/academia_musculacao.jpg?v=1687444110&width=2048",
      tags: ["HTML5", "CSS3", "JavaScript", "Tailwind"],
      github: "https://github.com/luismiguelti/fitmentor",
      live: "https://fitmentor-beryl.vercel.app/",
    },
    {
      title: "Landing Page Purple Team Tech",
      description: "Landing page moderna para a Purple Team com design responsivo.",
      image: "https://purpleteamtech.netlify.app/assets/hero-illustration-BrZ2tPQy.png",
      tags: ["HTML5", "CSS3", "Tailwind" , "TypeScript" , "React" , "Vite" , "IA"],
      github: "https://github.com/luismiguelti/purple-team-landing",
      live: "https://purpleteamtech.netlify.app/",
    },
    {
      title: "E-commerce",
      description: "Plataforma de e-commerce com design moderno e interativo.",
      image: "https://wizzy.ai/blog/wp-content/uploads/2024/01/ecomm-.png",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/luismiguelti/ecommerce-nikeclone",
      live: "https://ecommercenikeclonebasic.netlify.app/",
    },
    {
      title: "Sistema de Gerenciamento de Caixa",
      description: "Sistema de gerenciamento de caixa com funcionalidades completas para barbearia Marcão Art Barber ( PROJETO EM ANDAMENTO ).",
      image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["HTML5", "CSS3", "JavaScript" , "Figma" , "MongoDB" , "Express"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`scroll-reveal ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-primary glow-cyan font-mono">&lt;PROJETOS /&gt;</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const projectAnimation = useScrollAnimation();
            return (
              <div
                key={index}
                ref={projectAnimation.ref}
                className={`scroll-reveal-scale ${projectAnimation.isVisible ? 'visible' : ''}`}
              >
                <Card className="bg-card/50 border-primary/20 hover:border-primary transition-all duration-300 overflow-hidden group rounded-2xl card-hover cursor-pointer h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80"></div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-gradient-green group-hover:glow-green transition-all">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-foreground/60">
                      {project.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-primary/50 text-primary text-xs font-mono rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground flex-1"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground flex-1"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
