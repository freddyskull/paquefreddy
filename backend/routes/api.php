<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use function Pest\Laravel\get;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

# RUTAS DE PRODUCTOS

Route::prefix('products')->group(function(){
    Route::get('/', []);
});