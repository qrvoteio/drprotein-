import { Card, CardContent } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Политика конфиденциальности
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Мы заботимся о безопасности ваших персональных данных
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <Card>
              <CardContent className="p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных 
                    пользователей сайта Dr.Protein. Используя наш сайт, вы соглашаетесь с условиями данной политики.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Собираемая информация</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Мы собираем следующие категории персональных данных:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Контактная информация (имя, телефон, email)</li>
                    <li>Данные об использовании сайта (cookies, IP-адрес)</li>
                    <li>Информация, предоставленная при заполнении форм</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Цели обработки данных</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Мы используем ваши персональные данные для:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Обработки заявок и консультаций</li>
                    <li>Информирования о новых продуктах и акциях</li>
                    <li>Улучшения качества обслуживания</li>
                    <li>Выполнения обязательств по договорам</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Защита данных</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы применяем организационные и технические меры для защиты ваших персональных данных от 
                    несанкционированного доступа, изменения, раскрытия или уничтожения. Данные хранятся на 
                    защищенных серверах с ограниченным доступом.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Передача данных третьим лицам</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы не передаем ваши персональные данные третьим лицам без вашего согласия, за исключением 
                    случаев, предусмотренных законодательством РФ. Мы можем привлекать партнеров для обработки 
                    данных (например, службы доставки), которые обязаны соблюдать конфиденциальность.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Ваши права</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Вы имеете право:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Получать информацию об обработке ваших данных</li>
                    <li>Требовать уточнения, блокирования или удаления данных</li>
                    <li>Отозвать согласие на обработку данных</li>
                    <li>Обратиться в надзорные органы</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Cookies</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы используем cookies для улучшения работы сайта и анализа посещаемости. Вы можете настроить 
                    ваш браузер для отклонения cookies, но это может ограничить функциональность сайта.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Изменения в политике</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Мы оставляем за собой право вносить изменения в данную Политику конфиденциальности. 
                    Актуальная версия всегда доступна на этой странице.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Контакты</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    По вопросам обработки персональных данных вы можете связаться с нами:
                  </p>
                  <ul className="list-none space-y-2 text-muted-foreground mt-4">
                    <li><strong>Email:</strong> rublev@sofosbio.com</li>
                    <li><strong>Телефон:</strong> +7 916 966-46-09</li>
                  </ul>
                </div>

                <div className="pt-6 border-t">
                  <p className="text-sm text-muted-foreground">
                    Последнее обновление: Ноябрь 2024
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
