<?php

use App\Http\Controllers\API\CarController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::get('list-cars', [CarController::class, 'index']);
Route::post('/save-car', [CarController::class, 'store']);
Route::delete('/delete-car/{id}', [CarController::class, 'destroy']);
Route::post('/update-car/id/{id}', [CarController::class, 'updateCar']);

