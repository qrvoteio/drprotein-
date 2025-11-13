import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Link } from "wouter";
import { Search } from "lucide-react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertNewsletterSubscriptionSchema, type Article, type InsertNewsletterSubscription } from "@shared/schema";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { toast } = useToast();

  const { data: articles, isLoading, error } = useQuery<Article[]>({
    queryKey: ['/api/articles'],
  });

  const newsletterForm = useForm<InsertNewsletterSubscription>({
    resolver: zodResolver(insertNewsletterSubscriptionSchema),
    defaultValues: {
      email: "",
    },
  });

  const newsletterMutation = useMutation({
    mutationFn: async (data: InsertNewsletterSubscription) => {
      return apiRequest('POST', '/api/newsletter', data);
    },
    onSuccess: () => {
      toast({
        title: "Спасибо за подписку!",
        description: "Вы будете получать наши новости на почту.",
      });
      newsletterForm.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось подписаться. Попробуйте позже.",
      });
    },
  });

  const onNewsletterSubmit = (data: InsertNewsletterSubscription) => {
    newsletterMutation.mutate(data);
  };

  const categories = [
    { id: "all", label: "Все статьи" },
    { id: "science", label: "Наука" },
    { id: "recipes", label: "Рецепты" },
    { id: "interviews", label: "Интервью" },
    { id: "stories", label: "Истории" },
  ];

  const filteredArticles = articles?.filter(article => {
    const matchesCategory = !selectedCategory || selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryLabel = (categoryId: string) => {
    const categoryMap: Record<string, string> = {
      science: "Наука",
      recipes: "Рецепты",
      interviews: "Интервью",
      stories: "Истории",
    };
    return categoryMap[categoryId] || categoryId;
  };

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return d.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Блог и исследования
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Образовательный контент о пептидах, здоровом питании и активном долголетии
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b bg-background sticky top-16 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id || (!selectedCategory && category.id === "all") ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id === "all" ? null : category.id)}
                  data-testid={`button-category-${category.id}`}
                >
                  {category.label}
                </Button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск статей..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                data-testid="input-search"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <Skeleton className="h-5 w-20 mb-3" />
                    <Skeleton className="h-6 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-16 w-full mb-4" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Не удалось загрузить статьи. Пожалуйста, попробуйте позже.
              </p>
              <Button onClick={() => window.location.reload()} data-testid="button-retry">
                Попробовать снова
              </Button>
            </div>
          ) : filteredArticles && filteredArticles.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <Card key={article.id} className="hover-elevate flex flex-col" data-testid={`card-article-${article.slug}`}>
                  <CardHeader>
                    <div className="mb-3">
                      <Badge variant="secondary" data-testid={`badge-category-${article.category}`}>
                        {getCategoryLabel(article.category)}
                      </Badge>
                    </div>
                    <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                    <CardDescription className="text-xs">
                      {article.author} • {formatDate(article.publishedAt)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                      {article.excerpt}
                    </p>
                    <Link href={`/blog/${article.slug}`}>
                      <Button variant="outline" className="w-full" data-testid={`button-read-${article.slug}`}>
                        Читать статью
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground" data-testid="text-no-results">
                Статьи не найдены. Попробуйте изменить критерии поиска.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Подпишитесь на нашу рассылку</h2>
            <p className="text-muted-foreground mb-6">
              Получайте новые статьи и эксклюзивные материалы прямо на почту
            </p>
            <Form {...newsletterForm}>
              <form onSubmit={newsletterForm.handleSubmit(onNewsletterSubmit)} className="flex gap-2 max-w-md mx-auto">
                <FormField
                  control={newsletterForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Ваш email"
                          {...field}
                          disabled={newsletterMutation.isPending}
                          data-testid="input-newsletter-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button 
                  type="submit" 
                  disabled={newsletterMutation.isPending}
                  data-testid="button-subscribe"
                >
                  {newsletterMutation.isPending ? "..." : "Подписаться"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
