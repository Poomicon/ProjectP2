<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Store;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    protected $model = Product::class;

    public function definition()
    {
        return [
            'id_stores' => Store::factory(), // Changed from 'id_store' to 'id_stores'
            'ProductName' => $this->faker->word, // Changed from 'productName' to 'ProductName'
            'Price' => $this->faker->randomFloat(2, 10, 500), // Changed from 'price' to 'Price'
            'Stock' => $this->faker->numberBetween(10, 100), // Added 'Stock' field
            'CreatedAt' => $this->faker->dateTimeThisYear(), // Changed from 'createdAt' to 'CreatedAt'
            'ProductType' => $this->faker->word, // Changed from 'productType' to 'ProductType'
            'ProductStatus' => $this->faker->randomElement(['Available', 'Out of stock']), // Changed from 'productStatus' to 'ProductStatus'
        ];
    }
}
