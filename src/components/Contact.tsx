import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const titleAnimation = useScrollAnimation();
  const infoAnimation = useScrollAnimation();
  const formAnimation = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "luismiguelcintrasilva180@email.com",
      link: "mailto:luismiguelcintrasilva180@email.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 98950-5804",
      link: "tel:+5511989505804",
    },
    {
      icon: MapPin,
      title: "Localização",
      value: "São Paulo, Brasil",
      link: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contato" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div 
          ref={titleAnimation.ref}
          className={`scroll-reveal ${titleAnimation.isVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-primary glow-cyan font-mono">&lt;CONTATO /&gt;</span>
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div 
            ref={infoAnimation.ref}
            className={`scroll-reveal-left ${infoAnimation.isVisible ? 'visible' : ''} space-y-6`}
          >
            <div>
              <h3 className="text-2xl font-bold text-gradient-green mb-4">
                Vamos Trabalhar Juntos?
              </h3>
              <p className="text-foreground/70 mb-8">
                Estou sempre aberto a novos projetos e oportunidades. Entre em contato e
                vamos criar algo incrível!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="bg-card/50 border-primary/20 hover:border-primary transition-all duration-300 rounded-2xl card-hover cursor-pointer"
                >
                  <CardContent className="p-4">
                    <a
                      href={info.link}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm text-foreground/60">{info.title}</div>
                        <div className="font-medium text-foreground">{info.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div 
            ref={formAnimation.ref}
            className={`scroll-reveal-right ${formAnimation.isVisible ? 'visible' : ''}`}
          >
            <Card className="bg-card/50 border-primary/20 rounded-2xl">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      placeholder="Seu Nome"
                      className="bg-background/50 border-primary/20 focus:border-primary rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Seu Email"
                      className="bg-background/50 border-primary/20 focus:border-primary rounded-xl"
                    />
                  </div>
                  <div>
                    <Input
                      placeholder="Assunto"
                      className="bg-background/50 border-primary/20 focus:border-primary rounded-xl"
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Sua Mensagem"
                      rows={5}
                      className="bg-background/50 border-primary/20 focus:border-primary resize-none rounded-xl"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground border-glow-magenta group rounded-xl"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
