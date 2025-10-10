import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const stats = [
    { value: "50+", label: "Projetos" },
    { value: "3+", label: "Anos Exp." },
    { value: "100%", label: "Dedicação" },
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary glow-cyan font-mono">&lt;SOBRE /&gt;</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative group animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg transform group-hover:scale-105 transition-transform"></div>
            <img
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Desenvolvedor Front-end"
              className="relative rounded-lg w-full h-auto border-2 border-primary/30 shadow-lg"
            />
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-green">
              Desenvolvedor Front-end Especialista
            </h3>

            <p className="text-foreground/70 leading-relaxed">
              Sou um desenvolvedor front-end apaixonado por criar experiências digitais
              inovadoras e interfaces que conectam tecnologia e criatividade. Com expertise
              em tecnologias modernas, transformo ideias em realidade digital.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              Especializado em HTML5, CSS3, JavaScript e Tailwind CSS, utilizo Figma para
              design e Git/GitHub para versionamento.
            </p>

            <p className="text-foreground/70 leading-relaxed">
              Minha missão é criar interfaces que não apenas funcionam perfeitamente, mas
              também proporcionam experiências memoráveis e envolventes para os usuários.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-primary/20 hover:border-primary/50 transition-colors hover-glow-cyan"
                >
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl md:text-3xl font-bold text-gradient-cyber mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-foreground/60">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
