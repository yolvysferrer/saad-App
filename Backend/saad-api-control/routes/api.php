<?php

use App\Http\Controllers\api\auth\RegisterController;
use App\Http\Controllers\api\services\BudgetController;
use Illuminate\Support\Facades\Route;

Route::controller(RegisterController::class)->group(function(){
    Route::post('register', 'register');
    Route::post('login', 'login');
});

Route::middleware(['include.token','auth:sanctum'])->group(function () {
    Route::prefix('budgetservice')->group(function () {
        Route::get('/{endpoint}', [BudgetController::class, 'getEndpoint']);
        Route::post('/{endpoint}', [BudgetController::class, 'postEndpoint']);
    });
});
