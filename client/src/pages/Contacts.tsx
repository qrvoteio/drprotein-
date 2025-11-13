import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertContactSubmissionSchema.extend({
  subject: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contacts() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
      type: "contact",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Сообщение отправлено!",
        description: "Мы свяжемся с вами в ближайшее время.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Попробуйте позже.",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    const { subject, ...submitData } = data;
    const message = subject ? `${subject}\n\n${data.message || ""}` : data.message;
    contactMutation.mutate({ ...submitData, message: message || "" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4" data-testid="text-page-title">
              Контакты
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info and Form */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-4">
              <Card data-testid="card-contact-info">
                <CardHeader>
                  <CardTitle>Контактная информация</CardTitle>
                  <CardDescription>Свяжитесь с нами напрямую</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Телефон</p>
                      <a href="tel:+79169664609" className="text-muted-foreground hover:text-primary" data-testid="link-phone">
                        +7 916 966-46-09
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href="mailto:rublev@sofosbio.com" className="text-muted-foreground hover:text-primary" data-testid="link-email">
                        rublev@sofosbio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Адрес</p>
                      <p className="text-muted-foreground">
                        Россия, Москва
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Режим работы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Пн-Пт:</span>
                      <span className="font-semibold">9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Сб-Вс:</span>
                      <span className="font-semibold">Выходной</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card data-testid="card-contact-form">
                <CardHeader>
                  <CardTitle>Отправьте нам сообщение</CardTitle>
                  <CardDescription>
                    Заполните форму ниже, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Имя *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Ваше имя" 
                                  {...field} 
                                  data-testid="input-name"
                                  disabled={contactMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Телефон *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="+7 (___) ___-__-__" 
                                  {...field} 
                                  data-testid="input-phone"
                                  disabled={contactMutation.isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email *</FormLabel>
                            <FormControl>
                              <Input 
                                type="email"
                                placeholder="your@email.com" 
                                {...field} 
                                data-testid="input-email"
                                disabled={contactMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Тема обращения</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="О чем вы хотите нас спросить?" 
                                {...field}
                                value={field.value || ""}
                                data-testid="input-subject"
                                disabled={contactMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Сообщение</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Расскажите подробнее..." 
                                rows={6}
                                {...field}
                                value={field.value || ""}
                                data-testid="input-message"
                                disabled={contactMutation.isPending}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto" 
                        disabled={contactMutation.isPending}
                        data-testid="button-submit"
                      >
                        {contactMutation.isPending ? "Отправка..." : "Отправить сообщение"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Часто задаваемые вопросы</h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Как быстро вы отвечаете на обращения?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Мы стараемся отвечать на все обращения в течение 24 часов в рабочие дни.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Можно ли заказать продукцию оптом?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, мы работаем с оптовыми клиентами. Свяжитесь с нами для обсуждения условий.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Есть ли у вас программа лояльности?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Программа лояльности находится в разработке. Подпишитесь на рассылку, чтобы узнать первыми о её запуске.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
