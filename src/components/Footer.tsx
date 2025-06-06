import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">VismutSHOP</h3>
            <p className="text-gray-400 mb-4">
              Качественные вешалки для дома и офиса
            </p>
            <div className="flex space-x-4">
              <Icon name="Phone" size={20} />
              <span className="text-gray-400">+7 (495) 123-45-67</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Деревянные вешалки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Металлические вешалки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Напольные вешалки
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Настенные вешалки
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Компания</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Доставка
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Гарантия
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Instagram" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Twitter" size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="Facebook" size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 VismutSHOP. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
