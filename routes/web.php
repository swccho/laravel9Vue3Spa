<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SpaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/admin/auth/{any}', [SpaController::class, 'index'])->where('any', '.*')->name('lvs.auth');
Route::get('/admin', [SpaController::class, 'index'])->where('any', '.*')->name('lvs.home');
Route::get('/admin/{any}', [SpaController::class, 'index'])->where('any', '.*')->name('lvs.home');

