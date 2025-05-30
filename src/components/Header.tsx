import { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContacts = () => {
    const contactsElement = document.getElementById("contacts");
    contactsElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-white/10" : "bg-transparent"
      }`}
      style={{
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.1)" : "none",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "70px",
          }}
        >
          <div
            style={{
              fontSize: "28px",
              fontWeight: "700",
              background: "linear-gradient(135deg, #005BFF 0%, #CB11AB 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            VismutSHOP
          </div>

          <button
            onClick={scrollToContacts}
            style={{
              padding: "8px 20px",
              backgroundColor: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "25px",
              color: "white",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
              transition: "all 0.3s ease",
              fontFamily: "Open Sans, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.2)";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "rgba(255,255,255,0.1)";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Контакты
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
