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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::get('/', 'HomeController@index');
Route::get('/home', 'HomeController@index');


Route::group(['middleware' => 'auth:api'], function () {
    //    Route::resource('task', 'TasksController');

    //Please do not remove this if you want adminlte:route and adminlte:link commands to works correctly.
    #adminlte_api_routes
});

Route::post('/login','AuthController@authenticate')->middleware('cors');

Route::post('/logout','AuthController@logout');

Route::post('/register','AuthController@register');

Route::group([
    'middleware' => ['jwt.auth', 'jwt.refresh'],
], function () {
    Route::get('/books', 'BooksController@index');
    Route::get('/book/{id}', 'BooksController@show');
    Route::post('/book/{id}/comment', 'CommentsController@store');


    Route::get('/cart/show', 'CartController@show');
    Route::post('/cart', 'CartController@addToCart');
    Route::post('/cart/quantity', 'CartController@getTotalQuantity');
    Route::post('/cart/quantity/add', 'CartController@addItem');
    Route::post('/cart/quantity/deduct', 'CartController@deductItem');
    Route::post('/cart/delete', 'CartController@deleteItem');
    Route::get('/cart/clear', 'CartController@clearCart');


    Route::get('/author/{id}', 'AuthorsController@show');

    Route::get('/genre/{id}', 'GenresController@show');

});

