const Features = () => {
  const items = [
    "Marketplace for farm products",
    "Learn modern farming techniques",
    "Connect with agricultural experts",
    "Buy and sell livestock & crops",
  ];

  return (
    <section className="p-10 text-center">
      <h2 className="text-3xl font-bold mb-6">What AgroVerse Offers</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="p-6 shadow rounded">
            {item}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
