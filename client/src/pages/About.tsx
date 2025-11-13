import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Award, Factory, FlaskConical, Heart, Users, TrendingUp } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: FlaskConical,
      title: "Научный подход",
      description: "Все наши продукты основаны на научных исследованиях и доказанной эффективности.",
    },
    {
      icon: Heart,
      title: "Забота о здоровье",
      description: "Мы создаем продукты для активного долголетия и качества жизни наших клиентов.",
    },
    {
      icon: Award,
      title: "Качество",
      description: "Собственное производство и строгий контроль на всех этапах гарантируют высочайшее качество.",
    },
    {
      icon: Factory,
      title: "Инновации",
      description: "Мы используем передовые технологии гидролиза белков и постоянно совершенствуем продукты.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Основание компании",
      description: "Создание научно-исследовательской лаборатории и начало разработки технологии гидролиза белков.",
    },
    {
      year: "2022",
      title: "Запуск производства",
      description: "Открытие собственного производственного комплекса — крупнейшего в России по гидролизу белков.",
    },
    {
      year: "2024",
      title: "Первый продукт",
      description: "Выпуск первого в России пептидного костного бульона в асептической упаковке.",
    },
    {
      year: "2025",
      title: "Расширение линейки",
      description: "Разработка новых продуктов: молочные коктейли и йогурты с пептидами.",
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "10 000+",
      label: "Довольных клиентов",
    },
    {
      icon: Factory,
      value: "99%",
      label: "Биодоступность белка",
    },
    {
      icon: Award,
      value: "100%",
      label: "Натуральный состав",
    },
    {
      icon: Users,
      value: "50+",
      label: "Специалистов в команде",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              О нас
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Мы — капитаны функционального питания, создающие инновационные продукты для вашего здоровья
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Наша миссия</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed">
                  <strong>Dr.Protein</strong> — первый российский бренд функционального питания на основе 
                  пептидных белков, предлагающий повседневные продукты для активного долголетия и здоровья.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  Мы — российская компания с собственным производством по гидролизации белков. 
                  Разрабатываем и выпускаем продукты с пептидными белками для всех, кто хочет быть 
                  здоровым, сильным и энергичным.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Наши ценности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover-elevate" data-testid={`card-value-${index}`}>
                  <CardHeader>
                    <div className="mx-auto mb-4 bg-primary/10 rounded-full p-4 w-fit">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Наша история</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-milestone-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold">
                          {milestone.year}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Dr.Protein в цифрах</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="text-center hover-elevate" data-testid={`card-stat-${index}`}>
                  <CardContent className="p-6">
                    <IconComponent className="h-10 w-10 text-primary mx-auto mb-4" />
                    <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Производство</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <p className="leading-relaxed">
                    <strong>Крупнейшее в России производство по гидролизу белков</strong> — наша гордость. 
                    Мы используем современное оборудование и инновационные технологии для создания продуктов 
                    высочайшего качества.
                  </p>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Собственная научно-исследовательская лаборатория</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Полный цикл контроля качества</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Асептическая упаковка для длительного хранения</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Соответствие всем международным стандартам</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Присоединяйтесь к нам</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Станьте частью движения за здоровое питание и активное долголетие
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" data-testid="button-products">
                  Наши продукты
                </Button>
              </Link>
              <Link href="/contacts">
                <Button size="lg" variant="outline" data-testid="button-contact">
                  Связаться с нами
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
