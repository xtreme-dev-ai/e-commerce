 import { Link } from 'react-router-dom';
import featured from '../../assets/featured.webp';

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/* Left content */}
        <div className="lg:w-1/2 text-center lg:text-left p-8">
          <h2 className="text-lg font-semibold mb-2 text-gray-700">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Discover high-quality, comfortable clothing that effortlessly blends
            fashion and function. Designed to make you look and feel great every
            day.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Shop Now
          </Link>
        </div>
        {/* Right Content */}
        <div className="lg:w-1/2 w-full">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover rounded-t-3xl lg:rounded-t-none lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
