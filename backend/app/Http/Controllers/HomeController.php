<?php

namespace App\Http\Controllers;

use App\models\Book;
use App\Repositories\BookRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    protected $bookRepository;

    public function __construct(BookRepository $bookRepository)
    {
//        $this->middleware('auth');
        $this->bookRepository = $bookRepository;
    }


    public function index($offset = 0)
    {
        $offset = $offset * 20;
        $books = Book::with(['comments','genres'])->offset($offset)->limit(20)->get();
        return new JsonResponse($books);
    }
}
