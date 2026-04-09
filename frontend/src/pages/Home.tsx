import Hero from '../components/Layout/Hero';
import GenderCollectionSection from '../components/Product/GenderCollectionSection';
import NewArrivals from '../components/Product/NewArrivals';
import ProductDetails from '../components/Product/ProductsDetails';
import ProductGrid, { type Product } from '../components/Product/ProductGrid';
import FeaturedCollection from '../components/Product/FeaturedCollection';
import FeaturesSection from '../components/Product/FeaturesSection';
const placeholderProducts: Product[] = [];

const Home = () => {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>

      <ProductDetails />
      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
        <FeaturedCollection />
        <FeaturesSection />
      </div>
    </div>
  );
};

export default Home;
