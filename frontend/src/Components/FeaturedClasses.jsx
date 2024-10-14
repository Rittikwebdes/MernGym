

// Sample data for featured classes
const classes = [
  {
    title: 'Yoga',
    description: 'Relax your mind and body with our expert-led yoga sessions, perfect for all levels.',
    image: '/img7.jpg', // Replace with your image URL
    schedule: 'Mon, Wed, Fri: 7AM - 8AM',
  },
  {
    title: 'HIIT',
    description: 'High-Intensity Interval Training to burn fat and build endurance in a fun, fast-paced environment.',
    image: '/img8.jpg', // Replace with your image URL
    schedule: 'Tue, Thu: 6PM - 7PM',
  },
  {
    title: 'Zumba',
    description: 'Dance your way to fitness with energetic, calorie-burning Zumba sessions.',
    image: '/contact.jpg', // Replace with your image URL
    schedule: 'Sat, Sun: 10AM - 11AM',
  },

];

const FeaturedClasses = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Classes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {classes.map((item, index) => (
            <div key={index} className="backdrop-blur-2xl rounded-lg shadow-lg p-6 text-center duration-300 hover:scale-105">
              <div className="h-40 overflow-hidden mb-4">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <p className="text-gray-500 text-sm font-medium">{item.schedule}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedClasses;
