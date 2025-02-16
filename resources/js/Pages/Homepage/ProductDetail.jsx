// filepath: /c:/Work/vs/backend-jojo/ProjectP2/resources/js/Pages/ProductDetail.jsx
import React from 'react';
import { Head } from '@inertiajs/inertia-react';

const ProductDetail = ({ product }) => {
  return (
    <div className="container mx-auto p-4">
      <Head title={product.ProductName} />
      <h1 className="text-3xl font-semibold text-center mb-8">{product.ProductName}</h1>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={product.image_url || 'default_image_url.jpg'}
          alt={product.ProductName}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <p className="text-gray-600">ประเภทสินค้า: {product.ProductType}</p>
          <p className="text-gray-600">ราคา: ฿{product.Price.toFixed(2)}</p>
          <p className="text-gray-600">รายละเอียด: {product.Description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
