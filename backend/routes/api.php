<?php

use Illuminate\Http\Request;

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

Route::get('/', 'HomeController@index');

Route::get('/home', 'HomeController@index');

Route::post('/login','AuthController@authenticate')->middleware('cors');

Route::post('/logout','AuthController@logout');

Route::post('/register','AuthController@register');

Route::group([
    'prefix' => '/books'
], function() {
    Route::get('/recommended', 'BooksController@index');
    Route::get('/ranked', 'BooksController@topRated');
    Route::get('/commented', 'BooksController@topCommented');
    Route::get('/bestsellers', 'BooksController@bestSellers');
    Route::get('/newest', 'BooksController@newest');

});

Route::get('/book/{id}', 'BooksController@show');
Route::post('/book/{id}/comment', 'CommentsController@store');

Route::get('/author/{id}', 'AuthorsController@show');

Route::get('/genre/{id}', 'GenresController@show');

Route::group([
    'middleware' => ['jwt.auth', 'jwt.refresh'],
], function () {

    Route::get('/cart/show', 'CartController@show');
    Route::post('/cart', 'CartController@addToCart');
    Route::post('/cart/quantity', 'CartController@getTotalQuantity');
    Route::post('/cart/quantity/add', 'CartController@addItem');
    Route::post('/cart/quantity/deduct', 'CartController@deductItem');
    Route::post('/cart/delete', 'CartController@deleteItem');
    Route::get('/cart/clear', 'CartController@clearCart');

});

