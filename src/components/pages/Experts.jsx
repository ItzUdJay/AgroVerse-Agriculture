const experts = [
  {
    name: "Dr. Grace Okonkwo",
    field: "Agronomist",
    location: "Lagos, Nigeria",
    rating: 4.9,
  },
  {
    name: "James Mwangi",
    field: "Livestock Specialist",
    location: "Nairobi, Kenya",
    rating: 4.8,
  },
  {
    name: "Amina Suleiman",
    field: "Soil Scientist",
    location: "Kano, Nigeria",
    rating: 4.7,
  },
  {
    name: "Peter Ndlovu",
    field: "Irrigation Engineer",
    location: "Harare, Zimbabwe",
    rating: 4.9,
  },
  {
    name: "Fatima Diallo",
    field: "Crop Protection Expert",
    location: "Dakar, Senegal",
    rating: 4.6,
  },
  {
    name: "Samuel Osei",
    field: "Poultry Consultant",
    location: "Accra, Ghana",
    rating: 4.8,
  },
];

const Experts = () => {
  return (
    <section className="p-10">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-2">
        Connect with Experts
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Get advice from experienced agricultural professionals.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {experts.map((expert, i) => (
          <div
            key={i}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto text-green-700 text-2xl font-bold">
              {expert.name.charAt(0)}
            </div>
            <h3 className="text-xl font-bold mt-4">{expert.name}</h3>
            <p className="text-green-600 font-medium">{expert.field}</p>
            <p className="text-gray-400 text-sm">{expert.location}</p>
            <p className="text-yellow-600 mt-2">★ {expert.rating}</p>
            <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded">
              Book a Session
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experts;
