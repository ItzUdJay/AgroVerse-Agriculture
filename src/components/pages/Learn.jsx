const courses = [
  {
    title: "Soil Health & Composting",
    desc: "Learn how to enrich your soil naturally for better crop yields.",
    duration: "2 hours",
  },
  {
    title: "Pest Control Without Chemicals",
    des: "Organic methods to keep your farm pest-free.",
    duration: "1.5 hours",
  },
  {
    title: "Irrigation Techniques",
    des: "Efficient water management for small and large farms.",
    duration: "3 hours",
  },
  {
    title: "Poultry Rearing 101",
    des: "Everything you need to start your own poultry farm.",
    duration: "4 hours",
  },
  {
    title: "Crop Rotation Planning",
    des: "Maximize your land's potential with smart rotation.",
    duration: "1 hour",
  },
  {
    title: "Harvest & Post-Harvest Handling",
    des: "Reduce waste and increase profit after harvest.",
    duration: "2.5 hours",
  },
];

const Learn = () => {
  return (
    <section className="p-10 bg-green-50 min-h-screen">
      <h2 className="text-4xl font-bold text-green-700 text-center mb-2">
        Learn Farming
      </h2>
      <p className="text-gray-500 text-center mb-8">
        Free courses to help you become a better farmer.
      </p>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition border-t-4 border-green-500"
          >
            <h3 className="text-xl font-bold">{course.title}</h3>
            <p className="text-gray-500 text-sm mt-2">{course.des}</p>
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl text-yellow-800">
                {course.duration}
              </span>
              <button className="text-green-600 font-semibold text-sm hover:underline">
                Start Course →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Learn;
