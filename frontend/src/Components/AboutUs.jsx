import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex gap-5 flex-col md:flex-row items-center mt-[100px]">
          {/* Image Section */}
          <div className="md:w-1/2 mt-[-50px]">
          <video
                className=" shadow-lg  w-full h-[450px]"
                controls
                preload="auto"
              >
                <source src="https://videos.pexels.com/video-files/3129208/3129208-uhd_2560_1440_25fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0 p-5 backdrop-blur-xl">
            <h2 className="text-6xl font-bold text-gray-100 mb-4">About Our Gym</h2>
            <p className="text-lg text-gray-200 mb-6">
              Our gym is dedicated to providing the best facilities and trainers to help you achieve your fitness goals. 
              With state-of-the-art equipment, personalized training programs, and a friendly community, 
              we ensure your fitness journey is both enjoyable and effective.
            </p>
            <p className="text-lg text-gray-200 mb-6">
              Whether you're looking to build strength, lose weight, or improve your overall health, we have 
              everything you need under one roof. Join us today and become a part of our fitness family!
            </p>

            {/* Buttons */}
            <div className="flex space-x-4">
              <Link to="/memberships" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300">
                View Membership Plans
              </Link>
              <Link to="/contacts" className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-900 transition duration-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
