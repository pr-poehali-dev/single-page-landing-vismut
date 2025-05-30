const Products = () => {
  const products = [
    {
      id: 1,
      name: "Классическая деревянная вешалка",
      price: "2 990 ₽",
      image:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400",
      description: "Элегантная вешалка из натурального дерева",
    },
    {
      id: 2,
      name: "Металлическая вешалка Loft",
      price: "4 500 ₽",
      image:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
      description: "Стильная металлическая вешалка в стиле лофт",
    },
    {
      id: 3,
      name: "Компактная напольная вешалка",
      price: "3 200 ₽",
      image:
        "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400",
      description: "Удобная напольная вешалка для небольших помещений",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Каталог вешалок
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">
                    {product.price}
                  </span>
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
