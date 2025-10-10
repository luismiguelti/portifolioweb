import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "luis.miguel@email.com",
      link: "mailto:luis.miguel@email.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      value: "+55 (11) 98765-4321",
      link: "tel:+5511987654321",
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
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary glow-cyan font-mono">&lt;CONTATO /&gt;</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6 animate-slide-in-left">
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
                  className="bg-card/50 border-primary/20 hover:border-primary/50 transition-all hover-glow-cyan"
                >
                  <CardContent className="p-4">
                    <a
                      href={info.link}
                      className="flex items-center gap-4 group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
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
          <Card className="bg-card/50 border-primary/20 animate-fade-in-up">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Seu Nome"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Seu Email"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Assunto"
                    className="bg-background/50 border-primary/20 focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Sua Mensagem"
                    rows={5}
                    className="bg-background/50 border-primary/20 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground border-glow-magenta group"
                >
                  Enviar Mensagem
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
