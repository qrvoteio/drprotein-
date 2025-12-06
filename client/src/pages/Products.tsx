import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Link } from "wouter";
import { Check } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import type { Product } from "@shared/schema";
import chickenBrothImage from "@assets/generated_images/chiken.png";
import beefBrothImage from "@assets/generated_images/beef.png";

export default function Products() {
  const { data: products, isLoading, error } = useQuery<Product[]>({
    queryKey: ['/api/products'],
  });

  // Map product slugs to placeholder images
  const getProductImage = (slug: string) => {
    if (slug === "chicken-broth") return chickenBrothImage;
    if (slug === "beef-broth") return beefBrothImage;
    return chickenBrothImage; // default
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Наши продукты
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Функциональное питание на основе пептидов для активного долголетия и здоровья
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {[1, 2].map((i) => (
                <Card key={i}>
                  <CardHeader className="p-0">
                    <Skeleton className="aspect-[4/3] w-full rounded-t-xl" />
                  </CardHeader>
                  <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-20 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="max-w-2xl mx-auto text-center py-12">
              <p className="text-muted-foreground mb-4">
                Не удалось загрузить продукты. Пожалуйста, попробуйте позже.
              </p>
              <Button onClick={() => window.location.reload()} data-testid="button-retry">
                Попробовать снова
              </Button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {products?.map((product) => (
                <Card key={product.id} className="hover-elevate" data-testid={`card-product-${product.slug}`}>
                  <CardHeader className="p-0">
                    <div className="aspect-[4/3] bg-white rounded-t-xl overflow-hidden relative">
                      <img
                        src={getProductImage(product.slug)}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        style={product.slug === "chicken-broth" ? { transform: "scale(1.4)", transformOrigin: "center" } :
                              product.slug === "beef-broth" ? { transform: "scale(1.4)", transformOrigin: "center" } : {}}
                      />
                      {product.availability !== "available" && (
                        <div className="absolute top-4 right-4">
                          <Badge variant="secondary" className="bg-primary text-primary-foreground">
                            Скоро
                          </Badge>
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="mb-2">{product.name}</CardTitle>
                    <CardDescription className="mb-4">{product.description}</CardDescription>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Содержание белка:</h4>
                        <p className="text-primary font-bold text-2xl">{product.protein} г</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Состав:</h4>
                        <p className="text-sm text-muted-foreground">{product.composition}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Преимущества:</h4>
                        <ul className="space-y-2">
                          {product.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm">
                              <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold mb-2">Способ применения:</h4>
                        <p className="text-sm text-muted-foreground">{product.usageInstructions}</p>
                      </div>

                      {product.availability === "available" ? (
                        <Link href="/contacts">
                          <Button className="w-full" data-testid={`button-order-${product.slug}`}>
                            Заказать консультацию
                          </Button>
                        </Link>
                      ) : (
                        <Button className="w-full" disabled data-testid={`button-notify-${product.slug}`}>
                          Скоро в продаже
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Не знаете, какой продукт выбрать?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Получите бесплатную консультацию от наших специалистов
            </p>
            <Link href="/contacts">
              <Button size="lg" data-testid="button-get-consultation">
                Получить консультацию
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
