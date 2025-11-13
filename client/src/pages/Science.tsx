import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, Check } from "lucide-react";

export default function Science() {
  const benefits = [
    "99% биодоступность против 60% у обычного белка",
    "Усвоение за 15-20 минут вместо 2-3 часов",
    "Полный аминокислотный профиль",
    "Прямая доставка в клетки",
    "Без жира и лишних калорий",
    "Сохраняет все полезные свойства коллагена",
  ];

  const scientificFacts = [
    {
      title: "Что такое пептиды?",
      description: "Пептиды — это короткие цепочки аминокислот, полученные путем гидролиза белка. Они настолько малы, что не требуют дополнительного переваривания и сразу всасываются в кровь.",
    },
    {
      title: "Биодоступность",
      description: "Биодоступность пептидов составляет 99%, в то время как обычный белок усваивается лишь на 60-70%. Это означает, что организм получает максимум пользы из каждого грамма.",
    },
    {
      title: "Аминокислотный профиль",
      description: "Пептидный бульон содержит все 20 аминокислот, включая 9 незаменимых, которые организм не может синтезировать самостоятельно.",
    },
    {
      title: "Синтез белка",
      description: "Пептиды запускают синтез собственного белка в организме, способствуя восстановлению мышц, укреплению костей и улучшению состояния кожи.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Наука о пептидах
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Пептиды — это не просто белок. Это революция в функциональном питании, 
              основанная на научных исследованиях и доказанной эффективности.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Преимущества пептидного белка</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                  <CardContent className="flex items-start gap-3 p-6">
                    <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <p>{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Facts */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Научные основы</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {scientificFacts.map((fact, index) => (
              <Card key={index} data-testid={`card-fact-${index}`}>
                <CardHeader>
                  <CardTitle>{fact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{fact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Сравнение с обычным бульоном</h2>
          <div className="max-w-4xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-4 text-left">Параметр</th>
                    <th className="border p-4 text-left">Домашний бульон</th>
                    <th className="border p-4 text-left bg-primary/10">Dr.Protein</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-4 font-semibold">Усвоение</td>
                    <td className="border p-4">60%</td>
                    <td className="border p-4 bg-primary/5 font-semibold text-primary">99%</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Время усвоения</td>
                    <td className="border p-4">2-3 часа</td>
                    <td className="border p-4 bg-primary/5 font-semibold text-primary">15-20 минут</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Содержание белка</td>
                    <td className="border p-4">5-10 г на порцию</td>
                    <td className="border p-4 bg-primary/5 font-semibold text-primary">25 г на порцию</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Жир</td>
                    <td className="border p-4">10-15 г</td>
                    <td className="border p-4 bg-primary/5 font-semibold text-primary">0 г</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Хранение</td>
                    <td className="border p-4">3 дня в холодильнике</td>
                    <td className="border p-4 bg-primary/5 font-semibold text-primary">12 месяцев без холодильника</td>
                  </tr>
                  <tr>
                    <td className="border p-4 font-semibold">Время приготовления</td>
                    <td className="border p-4">4-6 часов</td>
                    <td className="border p-4 bg-primary/5 font-semibold text-primary">1 минута</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Попробуйте пептидное питание</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Узнайте больше о наших продуктах и выберите подходящий для вашего образа жизни
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/products">
                <Button size="lg" data-testid="button-view-products">
                  Посмотреть продукты
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/contacts">
                <Button size="lg" variant="outline" data-testid="button-contact">
                  Получить консультацию
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
