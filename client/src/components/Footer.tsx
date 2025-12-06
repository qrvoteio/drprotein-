import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <div className="mb-4">
              <img 
                src="/dr-protein-logo.png" 
                alt="Dr.Protein" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Функциональное питание на основе пептидов для активного долголетия и здоровья
            </p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <a href="tel:+79169664609" className="hover:text-primary" data-testid="link-phone">
                  +7 916 966-46-09
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <a href="mailto:rublev@sofosbio.com" className="hover:text-primary" data-testid="link-email">
                  rublev@sofosbio.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" data-testid="link-footer-home"><span className="hover:text-primary">Главная</span></Link></li>
              <li><Link href="/science" data-testid="link-footer-science"><span className="hover:text-primary">Наука</span></Link></li>
              <li><Link href="/products" data-testid="link-footer-products"><span className="hover:text-primary">Продукты</span></Link></li>
              <li><Link href="/for-whom" data-testid="link-footer-forwhom"><span className="hover:text-primary">Для кого</span></Link></li>
              <li><Link href="/blog" data-testid="link-footer-blog"><span className="hover:text-primary">Блог</span></Link></li>
              <li><Link href="/about" data-testid="link-footer-about"><span className="hover:text-primary">О нас</span></Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-semibold mb-4">Информация</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contacts" data-testid="link-footer-contacts"><span className="hover:text-primary">Контакты</span></Link></li>
              <li><Link href="/privacy" data-testid="link-footer-privacy"><span className="hover:text-primary">Политика конфиденциальности</span></Link></li>
              <li><Link href="/terms" data-testid="link-footer-terms"><span className="hover:text-primary">Пользовательское соглашение</span></Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">© {currentYear} Dr.Protein. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
