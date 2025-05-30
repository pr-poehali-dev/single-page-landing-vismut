const Footer = () => {
  return (
    <footer
      id="contacts"
      style={{
        background: "linear-gradient(135deg, #005BFF 0%, #CB11AB 100%)",
        color: "white",
        padding: "60px 0 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "40px",
            marginBottom: "40px",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "700",
                marginBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              VismutSHOP
            </h3>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "1.6",
                opacity: "0.9",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              Производитель качественных напольных вешалок. Доставка по всей
              России через OZON и Wildberries.
            </p>
          </div>

          <div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Контактная информация
            </h4>
            <div
              style={{
                fontSize: "16px",
                fontFamily: "Open Sans, sans-serif",
              }}
            >
              <p style={{ marginBottom: "10px", opacity: "0.9" }}>
                📧 info@vismut-shop.ru
              </p>
              <p style={{ marginBottom: "10px", opacity: "0.9" }}>
                📱 +7 (XXX) XXX-XX-XX
              </p>
              <p style={{ opacity: "0.9" }}>📍 Россия, г. Москва</p>
            </div>
          </div>

          <div>
            <h4
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "20px",
                fontFamily: "Montserrat, sans-serif",
              }}
            >
              Маркетплейсы
            </h4>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily: "Open Sans, sans-serif",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                🛒 Наш магазин на OZON
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "white",
                  textDecoration: "none",
                  fontSize: "16px",
                  fontFamily: "Open Sans, sans-serif",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) => (e.target.style.opacity = "0.7")}
                onMouseLeave={(e) => (e.target.style.opacity = "1")}
              >
                🛍️ Наш магазин на Wildberries
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.2)",
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "14px",
            opacity: "0.8",
            fontFamily: "Open Sans, sans-serif",
          }}
        >
          © 2024 VismutSHOP. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
