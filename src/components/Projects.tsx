import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Futurista",
      description: "Plataforma de e-commerce com design cyberpunk e animações interativas.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Tailwind", "TypeScript"],
      github: "#",
      live: "#",
    },
    {
      title: "Dashboard Analytics",
      description: "Dashboard moderno com gráficos em tempo real e interface responsiva.",
      image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Chart.js", "API"],
      github: "#",
      live: "#",
    },
    {
      title: "Portfolio Criativo",
      description: "Site portfolio com animações 3D e efeitos parallax impressionantes.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "#",
      live: "#",
    },
    {
      title: "App Mobile First",
      description: "Aplicação web progressiva com foco em performance mobile.",
      image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["PWA", "React", "Firebase"],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projetos" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary glow-cyan font-mono">&lt;PROJETOS /&gt;</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all overflow-hidden group animate-fade-in-up hover-glow-cyan"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60"></div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gradient-green">
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
                      className="border-primary/50 text-primary text-xs font-mono"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
