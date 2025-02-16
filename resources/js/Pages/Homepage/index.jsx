import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Homepage = ({ products }) => {
  console.log(products); // Log the products data for debugging

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">รายการสินค้า</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image_url || 'default_image_url.jpg'}
              alt={product.ProductName}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.ProductName}</h3>
              <p className="text-gray-600">
                ฿{typeof product.Price === 'number' ? product.Price.toFixed(2) : product.Price}
              </p>
              <Link
                href={`/products/${product.id}`}
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                ดูรายละเอียด
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepage;
