import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const ProductDetail = ({ product }) => {
    console.log(product); // Log the product data for debugging

    // Ensure that the Price is a number
    const price = typeof product.Price === 'number' ? product.Price.toFixed(2) : parseFloat(product.Price).toFixed(2);

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-semibold text-center mb-8">{product.ProductName}</h1>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                    src={product.ProductImage || 'default_image_url.jpg'}
                    alt={product.ProductName}
                    className="w-full h-64 object-cover bg-gray-200"
                />
                <div className="p-4 space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">{product.ProductName}</h3>
                    <p className="text-xl font-bold text-green-600">฿{price}</p>
                    <p className="text-gray-600">Stock: {product.Stock}</p>
                    <p className="text-gray-600">Category: {product.CategoryName}</p>
                    <p className="text-gray-600">Status: {product.ProductStatus}</p>
                    <p className="text-gray-600">{product.ProductDescription}</p>
                    <Link
                        href="/homepage"
                        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 transition-colors duration-200"
                    >
                        กลับสู่หน้าหลัก
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
