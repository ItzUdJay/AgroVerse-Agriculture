const products = [
  {
    name: "Fresh Tomatoes",
    price: "$2.50/kg",
    seller: "GreenFarm Co.",
    type: "crop",
  },
  {
    name: "Organic Rice",
    price: "$1.80/kg",
    seller: "PaddyFields Ltd.",
    type: "crop",
  },
  {
    name: "Broiler Chicken",
    price: "$5.00/kg",
    seller: "Happy Hens Farm",
    type: "livestock",
  },
  {
    name: "Fresh Milk",
    price: "$1.20/L",
    seller: "DairyBest",
    type: "livestock",
  },
  { name: "Cassava", price: "$1.00/kg", seller: "RootsHarvest", type: "crop" },
  {
    name: "Free-Range Eggs",
    price: "$3.00/dozen",
    seller: "BarnFresh",
    type: "livestock",
  },
];

const Marketplace = () => {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-2">
        Marketplace
      </h2>
      <p className="text-red-700 font-bold text-center mb-8">
        Browse fresh farm products directly from local farmers.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((item, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow hover:shadow-md transition"
          >
            <span
              className={`text-xs font-semibold px-2 py-1 rounded ${item.type === "crop" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-red-700"}`}
            >
              {item.type}
            </span>
            <h3 className="text-xl font-bold mt-2">{item.name}</h3>
            <p className="text-gray-500 text-sm">{item.seller}</p>
            <p className="text-green-600 font-semibold text-lg mt-6">
              {item.price}
            </p>
            <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-yellow-600 transition">
              Contact Seller
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
