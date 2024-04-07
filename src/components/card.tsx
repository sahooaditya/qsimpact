const Card = () => {
  const cards = [
    {
      title: "GLOBAL DAY OF ACTION",
      description:
        "The Global Day of Action (GDA) happening on 14th December 2023 aims to mobilize youth worldwide behind a common cause, composting to regenerate our planet.",
      imageUrl: "/poor.jpg",
    },
    {
      title: "MAKE A DIFFERENCE",
      description:
        "The participant with the most significant composting capacity will be honored with the QS ImpACT Award Global Day of Action during the awards ceremony on January 18th, 2024.",
      imageUrl: "/3.jpg",
    },
    {
      title: "BE A COMMUNITY LEADER",
      description:
        "1.3 billion tons of food is wasted annually To scale if food waste were a country, it would be the third-largest producer of carbon dioxide globally (Source: WFP).",
      imageUrl: "/6.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-[#FFAF00]">
          Our Mission
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                <p className="text-gray-800">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
