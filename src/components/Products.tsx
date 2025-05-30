import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      name: "Напольная вешалка Классик",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=600&fit=crop",
      description:
        "Элегантная напольная вешалка из массива дерева. Идеально подходит для прихожей и спальни.",
    },
    {
      name: "Напольная вешалка Модерн",
      image:
        "https://images.unsplash.com/photo-1549497538-303791108f95?w=400&h=600&fit=crop",
      description:
        "Современный дизайн с металлическими элементами. Компактная и функциональная.",
    },
  ];

  return (
    <section
      style={{
        padding: "80px 0",
        backgroundColor: "#f8f9fa",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 42px)",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "50px",
            background: "linear-gradient(135deg, #005BFF 0%, #CB11AB 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          Наша продукция
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
