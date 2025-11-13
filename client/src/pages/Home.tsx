import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Play, User, Users, Briefcase, Home as HomeIcon, Sunrise, UserCheck, Phone, Mail } from "lucide-react";
import heroImage from "@assets/generated_images/Hero_background_lifestyle_photo_d090e215.png";
import chickenBrothImage from "@assets/generated_images/Chicken_broth_product_photo_9a60d41e.png";
import beefBrothImage from "@assets/generated_images/Beef_broth_product_photo_b199c9c5.png";

export default function Home() {
  const audienceSegments = [
    {
      icon: User,
      title: "Дети (3–12 лет)",
      subtitle: "Здоровье и рост",
      description: "Поддержка иммунитета, энергия для школы, лёгкое питание (если плохо ест).",
      slug: "children",
    },
    {
      icon: UserCheck,
      title: "ЗОЖ-ники / Спортсмены",
      subtitle: "Восстановление мышц",
      description: "Быстрое восстановление после тренировки, поддержание силы и выносливости.",
      slug: "athletes",
    },
    {
      icon: Briefcase,
      title: "Офисные работники",
      subtitle: "Энергия и концентрация",
      description: "Поддержка энергии, улучшение концентрации, легкое питание для занятых.",
      slug: "office",
    },
    {
      icon: HomeIcon,
      title: "Домохозяйки",
      subtitle: "Полезное питание для всей семьи",
      description: "Экономия времени, удобство, полезные продукты для всех членов семьи.",
      slug: "family",
    },
    {
      icon: Sunrise,
      title: "Люди после 30 лет",
      subtitle: "Антивозрастной эффект",
      description: "Поддержка мышечной массы, профилактика старения.",
      slug: "30plus",
    },
    {
      icon: Users,
      title: "Пожилые (60+)",
      subtitle: "Восстановление и профилактика",
      description: "Легкий белок для восстановления, профилактика саркопении.",
      slug: "60plus",
    },
  ];

  const products = [
    {
      name: "Куриный пептидный бульон",
      description: "25 г белка, полный аминокислотный профиль, готов к употреблению.",
      image: chickenBrothImage,
      available: true,
    },
    {
      name: "Говяжий пептидный бульон",
      description: "25 г белка, полный аминокислотный профиль, готов к употреблению.",
      image: beefBrothImage,
      available: true,
    },
    {
      name: "Молочный коктейль с пептидами",
      description: "Вкусно и полезно. Скоро в продаже.",
      image: chickenBrothImage,
      available: false,
    },
    {
      name: "Питьевой йогурт с пептидами",
      description: "Натуральный йогурт с пептидами. Скоро в продаже.",
      image: beefBrothImage,
      available: false,
    },
  ];

  const articles = [
    {
      title: "Как правильно распределить белок в течение дня",
      excerpt: "Научный подход к распределению белка для максимальной пользы организму.",
      slug: "protein-distribution",
    },
    {
      title: "Пептиды vs обычный белок: в чем разница?",
      excerpt: "Разбираемся в отличиях пептидного белка от обычного и их влиянии на здоровье.",
      slug: "peptides-vs-protein",
    },
    {
      title: "Питание для школьника: как обеспечить рост и иммунитет?",
      excerpt: "Рекомендации по правильному питанию детей школьного возраста.",
      slug: "school-nutrition",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
          }}
        />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-white z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" data-testid="text-hero-title">
              Первый в России пептидный костный бульон
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200" data-testid="text-hero-subtitle">
              25 г белка. Полный аминокислотный профиль. Готов за 1 минуту. Без жира. Без холодильника.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="text-lg" data-testid="button-learn-more">
                  Узнать больше
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg backdrop-blur-sm bg-white/10 text-white border-white hover:bg-white/20" data-testid="button-video">
                <Play className="mr-2 h-5 w-5" />
                Посмотреть видео
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Protein Deficit Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-deficit-title">
              56% россиян испытывают дефицит белка
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              Не потому, что не едят мясо, а потому что неправильно распределяют белок в течение дня. 
              Без регулярного поступления аминокислот начинается катаболизм, усталость, старение.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-destructive/10 border-destructive/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">❌</span> Типично
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <p><strong>Завтрак:</strong> 10 г</p>
                    <p><strong>Обед:</strong> 50 г</p>
                    <p><strong>Ужин:</strong> 15 г</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="text-2xl">✅</span> Dr.Protein
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-left">
                    <p><strong>Завтрак:</strong> 25 г</p>
                    <p><strong>Перекус:</strong> 25 г</p>
                    <p><strong>Обед:</strong> 25 г</p>
                    <p><strong>Ужин:</strong> 25 г</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Link href="/science">
              <Button size="lg" className="mt-8" data-testid="button-protein-info">
                Как правильно есть белок?
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center" data-testid="text-science-title">
              Пептиды — не просто белок. Это «шаттл» для аминокислот
            </h2>
            <p className="text-lg text-center text-muted-foreground mb-12">
              Пептиды усваиваются за 15–20 минут и доставляют аминокислоты прямо в клетку. 
              В отличие от обычного белка, который переваривается 2–3 часа и частично теряется.
            </p>

            <div className="bg-background rounded-xl p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center">Домашний бульон</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Усвоение:</span>
                      <span className="font-semibold">60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Хранение:</span>
                      <span className="font-semibold">3 дня</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Жир:</span>
                      <span className="font-semibold">Высокий</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-center text-primary">Dr.Protein</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Усвоение:</span>
                      <span className="font-semibold text-primary">99%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Хранение:</span>
                      <span className="font-semibold text-primary">12 месяцев</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Жир:</span>
                      <span className="font-semibold text-primary">0 г</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/science">
                <Button size="lg" data-testid="button-science-details">
                  Подробнее о науке
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" data-testid="text-forwhom-title">
            Питание под ваш образ жизни
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audienceSegments.map((segment, index) => {
              const IconComponent = segment.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-audience-${segment.slug}`}>
                  <CardHeader>
                    <div className="mb-4">
                      <IconComponent className="h-12 w-12 text-primary" />
                    </div>
                    <CardTitle>{segment.title}</CardTitle>
                    <CardDescription className="font-semibold text-foreground">
                      {segment.subtitle}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{segment.description}</p>
                    <Link href={`/for-whom#${segment.slug}`}>
                      <Button variant="outline" className="w-full" data-testid={`button-select-${segment.slug}`}>
                        Подобрать продукт
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" data-testid="text-products-title">
            Функциональные продукты на основе пептидов
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-product-${index}`}>
                <CardHeader className="p-0">
                  <div className="aspect-[3/4] bg-white rounded-t-xl overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  {!product.available && (
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                      Скоро
                    </span>
                  )}
                  <CardTitle className="mb-3">{product.name}</CardTitle>
                  <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                  <Link href="/products">
                    <Button variant="outline" className="w-full" data-testid={`button-product-details-${index}`}>
                      Подробнее
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/products">
              <Button size="lg" data-testid="button-all-products">
                Посмотреть весь каталог
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center" data-testid="text-blog-title">
            Образовательный контент
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover-elevate" data-testid={`card-article-${index}`}>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{article.excerpt}</p>
                  <Link href={`/blog/${article.slug}`}>
                    <Button variant="outline" className="w-full" data-testid={`button-read-article-${index}`}>
                      Читать статью
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/blog">
              <Button size="lg" data-testid="button-all-articles">
                Читать все статьи
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6" data-testid="text-about-title">
              Кто мы?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Dr.Protein — российская компания с собственным производством по гидролизу белков. 
              Мы создаем функциональные продукты на основе пептидов для активного долголетия и здоровья.
            </p>
            <Link href="/about">
              <Button size="lg" data-testid="button-learn-about">
                Узнать больше
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center" data-testid="text-contact-title">
              Свяжитесь с нами
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              Заполните форму, и мы свяжемся с вами в ближайшее время
            </p>
            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="Ваше имя"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="+7 (___) ___-__-__"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border rounded-md"
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" data-testid="button-submit-contact">
                    Отправить
                  </Button>
                </form>
                <div className="mt-6 pt-6 border-t text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    <a href="tel:+79169664609" className="hover:text-primary">
                      +7 916 966-46-09
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    <a href="mailto:rublev@sofosbio.com" className="hover:text-primary">
                      rublev@sofosbio.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
