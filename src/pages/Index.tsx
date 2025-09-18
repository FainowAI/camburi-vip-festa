import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Users, Shield, Clock, Star, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-party.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    whatsapp: "",
    email: "",
    nickname: ""
  });

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 72,
    minutes: 0,
    seconds: 0
  });

  // Countdown timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const benefits = [
    {
      icon: "🎉",
      title: "Acesso Exclusivo",
      description: "Entrada VIP em todas as festas do ano + área reservada",
      animation: "animate-slide-in-left"
    },
    {
      icon: "💰",
      title: "Economia Garantida", 
      description: "Economize R$400+ por festa vs ingressos avulsos",
      animation: "animate-fade-in-up [animation-delay:200ms]"
    },
    {
      icon: "🍾",
      title: "Benefícios VIP",
      description: "Open bar premium + entrada prioritária + desconto restaurantes parceiros",
      animation: "animate-slide-in-right [animation-delay:400ms]"
    }
  ];

  const testimonials = [
    {
      name: "Marina Santos",
      text: "A melhor decisão que tomei! As festas do Unne são incríveis e o VIP faz toda diferença.",
      rating: 5
    },
    {
      name: "Roberto Silva", 
      text: "Já economizei mais de R$800 só esse ano. Vale muito a pena ter a mesa garantida!",
      rating: 5
    },
    {
      name: "Ana Carolina",
      text: "O atendimento VIP é excepcional. Nunca mais vou de ingresso comum!",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Como funciona o pagamento de R$300 por mês?",
      answer: "São 3 parcelas de R$300 (total R$900). Cobrança automática no cartão ou PIX. Primeira parcela ao se inscrever, depois mensalmente até a festa.",
      icon: "💳"
    },
    {
      question: "E se eu precisar cancelar?",
      answer: "Sem problemas! Pode cancelar até 30 dias antes da festa. Devolvemos o valor já pago, sem multa ou burocracia.",
      icon: "🚫"
    },
    {
      question: "O que está incluído na mesa VIP?",
      answer: "Mesa reservada para você + acompanhantes, open bar premium, entrada prioritária, desconto em parceiros, brinde exclusivo.",
      icon: "🎁"
    },
    {
      question: "Quantas pessoas posso levar?",
      answer: "Cada mesa VIP comporta até 6 pessoas. Você + 5 acompanhantes com todos os benefícios inclusos.",
      icon: "👥"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Floating Particles */}
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        {/* Hero Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Logo */}
          <div className="mb-8 animate-fade-in-up">
            <div className="inline-block bg-secondary px-6 py-3 rounded-lg">
              <span className="text-2xl font-brand font-bold text-secondary-foreground">
                U<span className="text-white">N</span>NE CAMBURI
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-hero font-brand font-bold text-white text-shadow mb-6 animate-fade-in-up [animation-delay:500ms]">
            Garanta Sua Mesa VIP na Festa de Final de Ano Mais Esperada de Camburi
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-brand-green-light mb-8 animate-fade-in-up [animation-delay:1s]">
            Apenas R$300 por mês durante 3 meses • Restam 50 vagas exclusivas
          </p>

          {/* Primary CTA */}
          <Button className="btn-hero animate-fade-in-up [animation-delay:1.5s]">
            GARANTIR MINHA MESA VIP AGORA
          </Button>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-section font-brand font-bold text-center mb-16 text-primary">
            Por Que Escolher o Círculo VIP Unne Camburi?
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card key={index} className={`card-lift ${benefit.animation}`}>
                <CardContent className="p-8 text-center">
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="bg-card rounded-xl shadow-purple overflow-hidden">
            <div className="bg-primary text-primary-foreground p-4">
              <h3 className="text-xl font-bold text-center">Comparação de Economia</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <h4 className="font-bold text-primary mb-2">Ingresso Comum</h4>
                  <p className="text-3xl font-bold text-destructive">R$150</p>
                  <p className="text-sm text-muted-foreground">Por festa</p>
                  <p className="text-sm">15 festas = R$2.250</p>
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-2">Mesa VIP</h4>
                  <p className="text-3xl font-bold text-secondary">R$900</p>
                  <p className="text-sm text-muted-foreground">Ano completo</p>
                  <p className="text-sm font-bold text-secondary">Economia: R$1.350</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-section font-brand font-bold text-center mb-4 text-primary">
            Mais de 500 Pessoas Já Garantiram Sua Mesa VIP
          </h2>

          {/* Stats Counter */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 text-center">
            <div className="animate-fade-in-up">
              <div className="counter">347</div>
              <p className="text-muted-foreground">Membros Ativos</p>
            </div>
            <div className="animate-fade-in-up [animation-delay:200ms]">
              <div className="counter">15</div>
              <p className="text-muted-foreground">Festas Por Ano</p>
            </div>
            <div className="animate-fade-in-up [animation-delay:400ms]">
              <div className="counter">98%</div>
              <p className="text-muted-foreground">Satisfação</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-lift">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                  <p className="font-bold text-primary">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-dark-gradient">
        <div className="container mx-auto px-4 max-w-md">
          <div className="bg-card rounded-xl p-8 shadow-lift">
            <h2 className="text-2xl font-bold text-center mb-2 text-primary">
              Garantir Minha Mesa VIP
            </h2>
            <p className="text-center text-muted-foreground mb-6">
              Preencha seus dados e receba confirmação imediata
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="fullName"
                placeholder="Seu nome completo"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input-focus"
                required
              />
              <Input
                name="whatsapp"
                placeholder="(27) 99999-9999"
                type="tel"
                value={formData.whatsapp}
                onChange={handleInputChange}
                className="input-focus"
                required
              />
              <Input
                name="email"
                placeholder="seu@email.com"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-focus"
                required
              />
              <Input
                name="nickname"
                placeholder="Como seus amigos te chamam? (opcional)"
                value={formData.nickname}
                onChange={handleInputChange}
                className="input-focus"
              />
              
              <Button type="submit" className="btn-primary-large">
                QUERO MINHA MESA VIP - R$300/MÊS
              </Button>
            </form>

            <div className="mt-6 text-center space-y-2">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" /> Pagamento 100% Seguro
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4" /> Confirmação Imediata por WhatsApp
              </p>
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" /> Pode Cancelar Quando Quiser
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-section font-brand font-bold text-center mb-12 text-primary">
            Perguntas Frequentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-semibold">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-dark-gradient relative overflow-hidden">
        <div className="particles">
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center gap-2">
              <Clock className="w-8 h-8 text-secondary" />
              Oferta Especial Acaba em:
            </h3>
            <div className="flex justify-center gap-4 text-white">
              <div className="bg-secondary/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-secondary">{timeLeft.hours.toString().padStart(2, '0')}</div>
                <div className="text-sm">Horas</div>
              </div>
              <div className="bg-secondary/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-secondary">{timeLeft.minutes.toString().padStart(2, '0')}</div>
                <div className="text-sm">Min</div>
              </div>
              <div className="bg-secondary/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-3xl font-bold text-secondary">{timeLeft.seconds.toString().padStart(2, '0')}</div>
                <div className="text-sm">Seg</div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-xl text-secondary font-bold mb-2">
              Apenas 23 mesas VIP restantes
            </p>
            <div className="w-full bg-white/20 rounded-full h-3 mb-4">
              <div className="bg-secondary h-3 rounded-full" style={{ width: '77%' }}></div>
            </div>
          </div>

          <Button className="btn-hero pulse-green text-2xl py-8 px-12">
            ÚLTIMA CHANCE - GARANTIR MESA VIP
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <div className="inline-block bg-secondary px-4 py-2 rounded">
              <span className="text-lg font-brand font-bold text-secondary-foreground">
                U<span className="text-white">N</span>NE CAMBURI
              </span>
            </div>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Unne Camburi. Todos os direitos reservados. | Camburi - Vitória/ES
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;