<?php

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

Route::get('/',[
    'uses' => 'HomeController@index',
    'as' => 'home'
]);

Route::group([
    'prefix' => '/admin',
    'middleware' => ['auth','role:owner|admin'],
    'as' => 'admin.'
], function () {

    Route::get('/',[
        'uses' => 'admin\AdminController@index',
        'as' => 'index'
    ]);

    Route::get('/users',[
        'uses' => 'admin\UsersController@index',
        'as' => 'users'
    ]);

    Route::get('/user/{id}',[
        'uses' => 'admin\UsersController@editUser',
        'as' => 'users.edit'
    ]);

    Route::put('/user/{id}/update',[
        'uses' => 'admin\UsersController@updateUser',
        'as' => 'users.update'
    ]);

    Route::post('/user/{id}/roles',[
        'uses' => 'admin\UsersController@updateUserRoles',
        'as' => 'users.roles'
    ]);

    Route::post('/user/{id}/delete',[
        'uses' => 'admin\UsersController@deleteUser',
        'as' => 'users.delete'
    ]);

    Route::get('/roles',[
        'uses' => 'admin\UsersController@permissions',
        'as' => 'permissions',
        'middleware' => 'permission:edit-permissions'
    ]);

    Route::post('/roles/update',[
        'uses' => 'admin\UsersController@updateRole',
        'as' => 'role.update',
        'middleware' => 'permission:edit-permissions'
    ]);

    Route::get('/roles/get',[
        'uses' => 'admin\UsersController@getPermissions',
        'as' => 'role.get',
        'middleware' => 'permission:edit-permissions'
    ]);

    //Please do not remove this if you want adminlte:route and adminlte:link commands to works correctly.
    #adminlte_routes
    Route::resource('comments', 'admin\CommentsController');

    Route::resource('authors', 'admin\AuthorsController');

    Route::resource('genres', 'admin\GenresController');

    Route::resource('books', 'admin\BooksController');

});

//Route::group([
//], function (){
//
//    Route::post('/book/{id}/comment', [
//        'uses' => 'CommentsController@store',
//        'as' => 'user.comment.create',
//    ]);
//
//    Route::post('/cart', 'CartController@addToCart');
//
//    Route::post('/cart/quantity', 'CartController@getTotalQuantity');
//
//    Route::post('/cart/quantity/add', 'CartController@addItem');
//
//    Route::post('/cart/quantity/deduct', 'CartController@deductItem');
//
//    Route::post('/cart/delete', 'CartController@deleteItem');
//
//    Route::get('/cart/clear', 'CartController@clearCart')->name('user.clear.cart');
//
//    Route::get('/book/{id}', 'BooksController@show')->name('book.show');
//
//    Route::get('/author/{id}', 'AuthorsController@show')->name('author.show');
//
//    Route::get('/genre/{id}', 'GenresController@show')->name('genre.show');
//
//    Route::get('/cart/show', [
//        'uses' => 'CartController@show',
//        'as' => 'user.cart.show',
//    ]);
//});

Auth::routes();
