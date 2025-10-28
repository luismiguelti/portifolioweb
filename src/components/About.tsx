import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import img from '/public/1738818808043.jpeg';

const About = () => {
  const titleAnimation = useScrollAnimation();
  const imageAnimation = useScrollAnimation();
  const contentAnimation = useScrollAnimation();

  const stats = [
    { value: "5+", label: "Projetos" },
    { value: "1+", label: "Anos Exp." },
    { value: "100%", label: "Dedicação" },
  ];

  return (
    <section id="sobre" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`scroll-reveal ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-primary glow-cyan font-mono">&lt;SOBRE /&gt;</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div 
            ref={imageAnimation.ref}
            className={`scroll-reveal-left ${imageAnimation.isVisible ? 'visible' : ''} relative group`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative rounded-full overflow-hidden border-4 border-primary/30 hover:border-primary transition-all duration-300 image-glow aspect-square w-full max-w-md mx-auto">
              <img
                src="/public/1738818808043.jpeg"
                alt="Desenvolvedor Front-end"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Content */}
          <div 
            ref={contentAnimation.ref}
            className={`scroll-reveal-right ${contentAnimation.isVisible ? 'visible' : ''} space-y-6`}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gradient-green">
              Olá, eu sou o Luis Miguel !
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
                  className="bg-card/50 border-primary/20 hover:border-primary transition-all duration-300 rounded-2xl card-hover cursor-pointer"
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
