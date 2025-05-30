import { useState } from "react";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">VismutSHOP</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Главная
            </a>
            <a
              href="#products"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Товары
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              <a
                href="#home"
                className="text-gray-700 hover:text-purple-600 py-2"
              >
                Главная
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-purple-600 py-2"
              >
                Товары
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-purple-600 py-2"
              >
                О нас
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 py-2"
              >
                Контакты
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
