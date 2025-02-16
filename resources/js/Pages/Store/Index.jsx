import { Link } from '@inertiajs/react';
import './CSS/Index.css'; // นำเข้าไฟล์ CSS

export default function Index({ stores }) {
    return (
        <div className="container">
            <h1>All Stores</h1>
            <ul className="store-list">
                {stores.map((store) => (
                    <li key={store.id} className="store-item">
                        <Link href={route('stores.show', store.id)} className="store-link">
                            {store.StoreName}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
