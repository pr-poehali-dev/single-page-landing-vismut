interface ProductCardProps {
  name: string;
  image: string;
  ozonLink?: string;
  wbLink?: string;
  description?: string;
}

const ProductCard = ({
  name,
  image,
  ozonLink = "#",
  wbLink = "#",
  description,
}: ProductCardProps) => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        height: "fit-content",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-5px)";
        e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
      }}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "3/4",
          backgroundColor: "#f8f9fa",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "48px",
        }}
      >
        🪑
      </div>

      <div style={{ padding: "24px" }}>
        <h3
          style={{
            fontSize: "20px",
            fontWeight: "600",
            color: "#333",
            marginBottom: "12px",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {name}
        </h3>

        {description && (
          <p
            style={{
              fontSize: "14px",
              color: "#666",
              marginBottom: "20px",
              fontFamily: "Open Sans, sans-serif",
              lineHeight: "1.5",
            }}
          >
            {description}
          </p>
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <a
            href={ozonLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "12px 20px",
              backgroundColor: "#005BFF",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "14px",
              fontFamily: "Open Sans, sans-serif",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#0052E6";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#005BFF";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Купить на OZON
          </a>

          <a
            href={wbLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              padding: "12px 20px",
              backgroundColor: "#CB11AB",
              color: "white",
              textDecoration: "none",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "600",
              fontSize: "14px",
              fontFamily: "Open Sans, sans-serif",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#B10E98";
              e.target.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#CB11AB";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Купить на Wildberries
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
