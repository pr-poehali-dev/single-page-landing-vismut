const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Добро пожаловать в VismutSHOP
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Качественные товары по доступным ценам. Быстрая доставка по всей
          России.
        </p>
        <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
          Смотреть каталог
        </button>
      </div>
    </section>
  );
};

export default Hero;
