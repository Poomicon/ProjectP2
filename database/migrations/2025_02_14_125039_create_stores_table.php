<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
{
    if (!Schema::hasTable('stores')) {
        Schema::create('stores', function (Blueprint $table) {
            $table->id();
            $table->string('StoreName');
            $table->string('ownerName');
            $table->string('PhoneNumber');
            $table->string('Address');
            $table->decimal('Rating', 3, 2);
            $table->date('OpenDate');
            $table->integer('Stock');
            $table->string('StoreStatus');
            $table->string('Picture');
            $table->foreignId('user_id')->nullable()->constrained('users')->onDelete('set null'); // แก้ไขที่นี่
            $table->timestamps();
        });
    }
}


    public function down() {
        Schema::dropIfExists('stores');
    }
};

