import { Link } from '@inertiajs/react';
import './CSS/Show.css'; // นำเข้าไฟล์ CSS

export default function Show({ store, products }) {
    return (
        <div className="container">
            <h1 className="store-name">{store.StoreName}</h1>
            <p className="store-address">{store.Address}</p>
            <p className="store-rating">Rating: {store.Rating}</p>
            <p className="store-status">Status: {store.StoreStatus}</p>

            <h2 className="products-title">Products:</h2>
            <ul className="products-list">
                {products.map((product) => (
                    <li key={product.id} className="product-item">
                        {product.ProductName} - ${product.Price}
                    </li>
                ))}
            </ul>

            <Link href={route('stores.index')} className="back-link">Back to all stores</Link>
        </div>
    );
}
