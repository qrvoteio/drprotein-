import { Card, CardContent } from "@/components/ui/card";

export default function Terms() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-page-title">
              Пользовательское соглашение
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Условия использования сайта Dr.Protein
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
                    Настоящее Пользовательское соглашение регулирует отношения между администрацией сайта 
                    Dr.Protein и пользователями данного сайта. Используя сайт, вы подтверждаете, что полностью 
                    принимаете условия настоящего соглашения.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Определения</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li><strong>Сайт</strong> — веб-сайт Dr.Protein, расположенный в сети Интернет</li>
                    <li><strong>Пользователь</strong> — лицо, использующее сайт</li>
                    <li><strong>Контент</strong> — любая информация, размещенная на сайте</li>
                    <li><strong>Администрация</strong> — уполномоченные сотрудники Dr.Protein</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Права и обязанности пользователя</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Пользователь имеет право:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Пользоваться всеми доступными функциями сайта</li>
                    <li>Получать информацию о продуктах и услугах</li>
                    <li>Обращаться к администрации с вопросами и предложениями</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Пользователь обязуется:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Предоставлять достоверную информацию</li>
                    <li>Не нарушать работу сайта</li>
                    <li>Не использовать автоматизированные средства доступа</li>
                    <li>Соблюдать законодательство РФ</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Права и обязанности администрации</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Администрация имеет право:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                    <li>Изменять содержание сайта без предварительного уведомления</li>
                    <li>Ограничивать доступ к сайту при нарушении условий</li>
                    <li>Вносить изменения в настоящее соглашение</li>
                  </ul>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    <strong>Администрация обязуется:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Поддерживать работоспособность сайта</li>
                    <li>Защищать персональные данные пользователей</li>
                    <li>Предоставлять достоверную информацию о продуктах</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Использование контента</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Весь контент сайта защищен авторским правом и принадлежит Dr.Protein. Копирование, 
                    распространение или иное использование материалов сайта без письменного разрешения 
                    администрации запрещено.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Ответственность</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Администрация не несет ответственности за:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                    <li>Временную недоступность сайта</li>
                    <li>Возможные технические сбои</li>
                    <li>Действия третьих лиц</li>
                    <li>Убытки, возникшие в результате использования или невозможности использования сайта</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Конфиденциальность</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Обработка персональных данных регулируется Политикой конфиденциальности, которая является 
                    неотъемлемой частью настоящего соглашения.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Разрешение споров</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Все споры и разногласия разрешаются путем переговоров. В случае невозможности достижения 
                    соглашения, споры подлежат рассмотрению в судебном порядке в соответствии с законодательством РФ.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Заключительные положения</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Настоящее соглашение вступает в силу с момента начала использования сайта и действует 
                    бессрочно. Администрация оставляет за собой право вносить изменения в соглашение без 
                    предварительного уведомления пользователей.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">10. Контакты</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    По вопросам, связанным с настоящим соглашением, вы можете связаться с нами:
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
