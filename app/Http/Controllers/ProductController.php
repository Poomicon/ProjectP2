<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        // Fetch all products
        $products = Product::all();

        // Send data to the Homepage/index view
        return Inertia::render('Homepage/index', [
            'products' => $products
        ]);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);
        return Inertia::render('Homepage/ProductDetail', ['product' => $product]);
    }
}
