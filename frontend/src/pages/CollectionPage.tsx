import { useEffect, useRef, useState } from 'react';
import ProductGrid, { type Product } from '../components/Product/ProductGrid';
import { FaFilter } from 'react-icons/fa';
import FilterSidebar from '../components/Product/FilterSidebar';
import SortOptions from '../components/Product/SortOptions';

const CollectionPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchedProducts = [
        {
          _id: '1',
          name: 'Product 1',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=1' }],
        },
        {
          _id: '2',
          name: 'Product 2',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=2' }],
        },
        {
          _id: '3',
          name: 'Product 3',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=3' }],
        },
        {
          _id: '4',
          name: 'Product 4',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=4' }],
        },
        {
          _id: '5',
          name: 'Product 5',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=5' }],
        },
        {
          _id: '6',
          name: 'Product 6',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=6' }],
        },
        {
          _id: '7',
          name: 'Product 7',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=7' }],
        },
        {
          _id: '8',
          name: 'Product 8',
          price: 100,
          images: [{ url: 'https://picsum.photos/500/500?random=8' }],
        },
      ];
      setProducts(fetchedProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile Filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Filter Sidebar */}
      <div
        ref={sidebarRef}
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}
      >
        <FilterSidebar />
      </div>

      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Options */}
        <SortOptions/>

        {/* Product Grid */}
        <ProductGrid products={products} />
      </div>
    </div>
  );
};

export default CollectionPage;
