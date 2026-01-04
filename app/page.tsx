import { products } from '@/data/products';
import ProductCard from '@/components/ProductCard';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Witaj w Allegro!
        </h1>
        <p className="text-gray-600">
          Znajdź najlepsze produkty w najlepszych cenach
        </p>
      </div>

      <div className="mb-6">
        <div className="flex items-center space-x-4 overflow-x-auto pb-2">
          <button className="px-4 py-2 bg-allegro-orange text-white rounded-full whitespace-nowrap">
            Wszystkie
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-100">
            Elektronika
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-100">
            Audio
          </button>
          <button className="px-4 py-2 bg-white text-gray-700 rounded-full whitespace-nowrap hover:bg-gray-100">
            Foto
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
