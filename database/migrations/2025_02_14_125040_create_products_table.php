<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        if (!Schema::hasTable('products')) {
            Schema::create('products', function (Blueprint $table) {
                $table->id();
                $table->foreignId('id_stores')->constrained('stores')->onDelete('cascade');
                $table->string('ProductName');
                $table->decimal('Price', 10, 2);
                $table->integer('Stock')->default(0);
                $table->timestamp('CreatedAt')->useCurrent();
                $table->string('ProductType');
                $table->string('ProductStatus')->default('available');
                $table->string('ProductImage')->nullable(); // คอลัมน์เก็บภาพ
                $table->timestamps();
            });
        }
    }

    public function down() {
        Schema::dropIfExists('products');
    }
};
