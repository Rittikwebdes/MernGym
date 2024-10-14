import { Link } from "react-router-dom";

const OurServices = () => {
  return (
    <div className=" py-12">
      <div className="container mx-auto px-4 mt-[100px]">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">Our Services</h2>

        {/* Video Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4 text-center">Explore Our Gym</h3>
          <video className="rounded-lg shadow-lg w-full" controls preload="auto">
            <source src="https://videos.pexels.com/video-files/992694/992694-hd_1920_1080_25fps.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Services Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Service 1 */}
          <div className="backdrop-blur-3xl rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Cardio Machines"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Cardio Training</h3>
            <p className="text-gray-600">
              Get your heart pumping with our top-of-the-line cardio machines, including treadmills, ellipticals, and bikes.
            </p>
          </div>

          {/* Service 2 */}
          <div className="backdrop-blur-3xl rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://images.pexels.com/photos/10039532/pexels-photo-10039532.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Strength Training Machines"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Strength Training</h3>
            <p className="text-gray-600">
              Build muscle and strength with our full range of free weights, machines, and resistance training equipment.
            </p>
          </div>

          {/* Service 3 */}
          <div className="backdrop-blur-3xl rounded-lg shadow-lg p-6 text-center">
            <img
              src="https://images.pexels.com/photos/6111625/pexels-photo-6111625.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Personal Training"
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">Personal Training</h3>
            <p className="text-gray-600">
              Work one-on-one with certified personal trainers to create a workout plan tailored to your goals.
            </p>
          </div>
        </div>

        {/* More Services */}
        <div className="flex justify-center space-x-4">
        <Link to="/memberships" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                View Membership Plans
              </Link>
              <Link to="/contacts" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300">
                Contact Us
              </Link>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
