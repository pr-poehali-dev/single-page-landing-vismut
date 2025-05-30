const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #005BFF 0%, #0066FF 25%, #7B2CBF 75%, #CB11AB 100%)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "70px",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 30% 50%, rgba(0,91,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(203,17,171,0.3) 0%, transparent 50%)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "clamp(32px, 5vw, 64px)",
            fontWeight: "700",
            color: "white",
            marginBottom: "20px",
            fontFamily: "Montserrat, sans-serif",
            textShadow: "0 2px 20px rgba(0,0,0,0.3)",
          }}
        >
          Напольные вешалки премиум-класса
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2.5vw, 24px)",
            color: "rgba(255,255,255,0.9)",
            marginBottom: "40px",
            fontFamily: "Open Sans, sans-serif",
            maxWidth: "600px",
            margin: "0 auto 40px",
            lineHeight: "1.5",
          }}
        >
          Качественные решения для вашего дома. Доступно на ведущих
          маркетплейсах России.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              padding: "12px 30px",
              backgroundColor: "#005BFF",
              color: "white",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Open Sans, sans-serif",
              boxShadow: "0 4px 15px rgba(0,91,255,0.4)",
            }}
          >
            Доступно на OZON
          </div>
          <div
            style={{
              padding: "12px 30px",
              backgroundColor: "#CB11AB",
              color: "white",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: "600",
              fontFamily: "Open Sans, sans-serif",
              boxShadow: "0 4px 15px rgba(203,17,171,0.4)",
            }}
          >
            Доступно на Wildberries
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
