// Sample data for benefits
const benefits = [
  {
    title: "Personalized Training",
    description:
      "Get tailored workout plans designed to meet your individual fitness goals.",
    image: "/img1.webp", // Replace with your image URL
  },
  {
    title: "Community Support",
    description:
      "Join a community of like-minded individuals who motivate and inspire each other.",
    image: "/img2.jpg", // Replace with your image URL
  },
  {
    title: "State-of-the-Art Equipment",
    description:
      "Train with the latest equipment and technology for optimal results.",
    image: "/img4.jpg", // Replace with your image URL
  },
  {
    title: "Group Classes",
    description:
      "Participate in energizing group classes led by experienced instructors.",
    image: "/img5.jpg", // Replace with your image URL
  },
  {
    title: "Nutritional Guidance",
    description:
      "Receive expert advice on nutrition to complement your fitness journey.",
    image: "/img6.jpg", // Replace with your image URL
  },
  {
    title: "Flexible Hours",
    description:
      "Access the gym at convenient hours to fit your busy schedule.",
    image: "/img7.jpg", // Replace with your image URL
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-8">Benefits of Joining Our Gym</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="backdrop-blur-2xl space-y-3  rounded-lg shadow-lg py-[100px] px-8 text-center transition-transform transform hover:scale-105">
            <div className="h-full overflow-hidden mt-[-40px]"> {/* Fixed height for the image container */}
              <img 
                src={benefit.image} 
                alt={benefit.title} 
                className="w-full h-full object-cover rounded-md" // Full coverage of the container
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600 text-sm">{benefit.description}</p> {/* Adjusted text size */}
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default BenefitsSection;
