const Products = () => {
  const products = [
    {
      id: 1,
      name: "Смартфон Premium",
      price: "49 990 ₽",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
      description: "Флагманский смартфон с отличной камерой",
    },
    {
      id: 2,
      name: "Ноутбук Pro",
      price: "89 990 ₽",
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
      description: "Мощный ноутбук для работы и развлечений",
    },
    {
      id: 3,
      name: "Наушники Wireless",
      price: "15 990 ₽",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      description: "Беспроводные наушники с шумоподавлением",
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Популярные товары
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
