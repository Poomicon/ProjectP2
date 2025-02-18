<?php
use App\Http\Controllers\StoreController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\ProductController;


Route::get('/homepage', [ProductController::class, 'index'])->name('homepage.index');
Route::get('/products/{id}', [ProductController::class, 'show'])->name('products.show');Route::get('stores/create', [StoreController::class, 'create'])->name('stores.create');
Route::get('stores/{id}', [StoreController::class, 'show'])->name('stores.show'); // เปลี่ยน 'stores.Show' เป็น 'stores.show'
Route::get('stores', [StoreController::class, 'index'])->name('stores.index');


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
