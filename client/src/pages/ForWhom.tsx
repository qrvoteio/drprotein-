import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { User, Users, Briefcase, Home as HomeIcon, Sunrise, UserCheck, FlaskConical } from "lucide-react";
import athleteImage from "@assets/generated_images/Athlete_lifestyle_photo_797a0828.png";
import officeImage from "@assets/generated_images/Office_worker_lifestyle_277622df.png";
import familyImage from "@assets/generated_images/Family_wellness_lifestyle_767d9197.png";

export default function ForWhom() {
  const segments = [
    {
      id: "children",
      icon: User,
      title: "Для детей (3–12 лет)",
      subtitle: "Здоровье и рост",
      description: "Растущему организму необходим полноценный белок для правильного развития, крепкого иммунитета и успехов в учебе.",
      benefits: [
        "Поддержка роста и развития",
        "Укрепление иммунитета",
        "Энергия для активных игр и учебы",
        "Улучшение концентрации внимания",
        "Легкое питание, если ребенок плохо ест",
      ],
      image: familyImage,
    },
    {
      id: "athletes",
      icon: UserCheck,
      title: "Для ЗОЖ-ников и спортсменов",
      subtitle: "Восстановление мышц",
      description: "Для тех, кто занимается фитнесом, бегом, кроссфитом или йогой. Быстрое восстановление и поддержание формы.",
      benefits: [
        "Быстрое восстановление после тренировок",
        "Поддержание мышечной массы",
        "Повышение выносливости",
        "Защита суставов и связок",
        "Удобный прием в любое время",
      ],
      image: athleteImage,
    },
    {
      id: "office",
      icon: Briefcase,
      title: "Для офисных работников",
      subtitle: "Энергия и концентрация",
      description: "Малоподвижный образ жизни требует особого внимания к питанию. Поддержите энергию и концентрацию в течение дня.",
      benefits: [
        "Поддержка энергии в течение дня",
        "Улучшение концентрации",
        "Легкий перекус на работе",
        "Профилактика усталости",
        "Быстрое приготовление за 1 минуту",
      ],
      image: officeImage,
    },
    {
      id: "family",
      icon: HomeIcon,
      title: "Для домохозяек и мам",
      subtitle: "Полезное питание для всей семьи",
      description: "Заботьтесь о здоровье всей семьи с минимальными усилиями. Экономьте время на приготовление полезных блюд.",
      benefits: [
        "Экономия времени на кухне",
        "Полезное питание для всей семьи",
        "Удобство хранения без холодильника",
        "Разнообразие рациона",
        "Уверенность в качестве",
      ],
      image: familyImage,
    },
    {
      id: "30plus",
      icon: Sunrise,
      title: "Для людей после 30 лет",
      subtitle: "Антивозрастной эффект",
      description: "Профилактика возрастных изменений начинается с правильного питания. Сохраните молодость и активность.",
      benefits: [
        "Поддержка мышечной массы",
        "Профилактика старения",
        "Улучшение состояния кожи",
        "Укрепление костей и суставов",
        "Поддержание метаболизма",
      ],
      image: officeImage,
    },
    {
      id: "60plus",
      icon: Users,
      title: "Для пожилых людей (60+)",
      subtitle: "Восстановление и профилактика",
      description: "С возрастом снижается способность усваивать белок. Пептиды решают эту проблему и помогают оставаться активными.",
      benefits: [
        "Профилактика саркопении",
        "Легкое усвоение белка",
        "Укрепление костей",
        "Поддержка суставов",
        "Повышение качества жизни",
      ],
      image: familyImage,
    },
    {
      id: "biohackers",
      icon: FlaskConical,
      title: "Для биохакеров",
      subtitle: "Научный подход к долголетию",
      description: "Для тех, кто ищет научно обоснованные продукты. Максимальная биодоступность и эффективность.",
      benefits: [
        "99% биодоступность",
        "Научно обоснованный состав",
        "Точный контроль нутриентов",
        "Оптимизация метаболизма",
        "Инновационный продукт",
      ],
      image: athleteImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Для кого это?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Пептидное питание Dr.Protein подходит для всех, кто заботится о своем здоровье и активном долголетии
            </p>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {segments.map((segment, index) => {
              const IconComponent = segment.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={segment.id} id={segment.id} className="scroll-mt-20">
                  <Card className="overflow-hidden hover-elevate" data-testid={`card-segment-${segment.id}`}>
                    <div className={`grid md:grid-cols-2 gap-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>
                      {/* Image */}
                      <div className={`${isEven ? 'md:order-1' : 'md:order-2'}`}>
                        <div className="aspect-[4/3] md:h-full">
                          <img 
                            src={segment.image}
                            alt={segment.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Content */}
                      <div className={`${isEven ? 'md:order-2' : 'md:order-1'}`}>
                        <CardHeader className="p-6 md:p-8">
                          <div className="mb-4">
                            <IconComponent className="h-12 w-12 text-primary" />
                          </div>
                          <CardTitle className="text-2xl md:text-3xl">{segment.title}</CardTitle>
                          <CardDescription className="text-lg font-semibold text-foreground">
                            {segment.subtitle}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="p-6 md:p-8 pt-0 md:pt-0">
                          <p className="text-muted-foreground mb-6">{segment.description}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold mb-3">Преимущества:</h4>
                            <ul className="space-y-2">
                              {segment.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-0.5">✓</span>
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <Link href="/products">
                            <Button className="w-full sm:w-auto" data-testid={`button-products-${segment.id}`}>
                              Подобрать продукт
                            </Button>
                          </Link>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Не нашли свою категорию?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Свяжитесь с нами, и мы поможем подобрать оптимальное решение именно для вас
            </p>
            <Link href="/contacts">
              <Button size="lg" data-testid="button-contact">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
