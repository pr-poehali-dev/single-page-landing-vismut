const About = () => {
  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700",
            marginBottom: "30px",
            background: "linear-gradient(135deg, #005BFF 0%, #CB11AB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          О компании VismutSHOP
        </h2>

        <div
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#555",
            fontFamily: "Open Sans, sans-serif",
            textAlign: "left",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            Мы специализируемся на производстве качественных напольных вешалок,
            которые сочетают в себе функциональность и элегантный дизайн. Наша
            продукция создается с учетом современных тенденций интерьера и
            потребностей наших клиентов.
          </p>

          <p style={{ marginBottom: "20px" }}>
            Каждая вешалка проходит строгий контроль качества и изготавливается
            из экологически чистых материалов. Мы гордимся тем, что наши изделия
            служат долго и радуют своих владельцев надежностью и красотой.
          </p>

          <p>
            Вы можете приобрести нашу продукцию на ведущих маркетплейсах России
            — OZON и Wildberries, где мы поддерживаем высокие стандарты
            обслуживания и быструю доставку по всей стране.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
