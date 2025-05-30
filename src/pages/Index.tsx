import "./index.css";

const Index = () => {
  return (
    <div className="vismut-page">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <h1 className="logo">VismutSHOP</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h2 className="hero-title">Напольные вешалки премиум качества</h2>
            <p className="hero-subtitle">
              Стильные решения для организации гардероба
            </p>
          </div>
        </section>

        {/* Products Section */}
        <section className="products" id="products">
          <div className="container">
            <div className="products-grid">
              {/* Product 1 */}
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=533&fit=crop"
                    alt="Классическая деревянная напольная вешалка"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">
                    Классическая деревянная напольная вешалка
                  </h3>
                  <div className="product-buttons">
                    <a
                      href="https://www.wildberries.ru/catalog/180336926/detail.aspx?targetUrl=GP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wildberries"
                    >
                      Купить на Wildberries
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ozon"
                    >
                      Купить на Ozon
                    </a>
                  </div>
                </div>
              </div>

              {/* Product 2 */}
              <div className="product-card">
                <div className="product-image">
                  <img
                    src="https://images.unsplash.com/photo-1503602642458-232111445657?w=400&h=533&fit=crop"
                    alt="Металлическая напольная вешалка Loft"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">
                    Металлическая напольная вешалка Loft
                  </h3>
                  <div className="product-buttons">
                    <a
                      href="https://www.wildberries.ru/catalog/180201543/detail.aspx?targetUrl=GP"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-wildberries"
                    >
                      Купить на Wildberries
                    </a>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-ozon"
                    >
                      Купить на Ozon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="container">
            <h2 className="section-title">О нас</h2>
            <p className="about-text">
              VismutSHOP — производитель качественных напольных вешалок для дома
              и офиса. Мы создаем стильные и функциональные решения для
              организации пространства, сочетая современный дизайн с высоким
              качеством материалов. Каждая наша вешалка проходит строгий
              контроль качества и отвечает самым высоким стандартам.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact" id="contact">
          <div className="container">
            <h2 className="section-title">Контакты</h2>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-label">Телефон:</span>
                <a href="tel:+74957405538" className="contact-link">
                  +7 (495) 740-55-38
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:vismutshop@yandex.ru" className="contact-link">
                  vismutshop@yandex.ru
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 VismutSHOP. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
