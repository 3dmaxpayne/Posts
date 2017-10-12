<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\BookRepository;
use App\Validators\BookValidator;


class BooksController extends Controller
{

    /**
     * @var BookRepository
     */
    protected $repository;

    /**
     * @var BookValidator
     */
    protected $validator;

    public function __construct(BookRepository $repository, BookValidator $validator)
    {
        $this->repository = $repository;
        $this->validator  = $validator;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = $this->repository->with('authors', 'comments', 'genres')->all();
        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        return response()->json([
            'books' => $books,
        ]);
    }


    /**
     * Display the specified resource.
     *
     * @param  int $id
     *
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = $this->repository->with('authors', 'comments', 'genres')->find($id);
        $book['rank'] = $book->rank;

        return response()->json([
            'book' => $book,
        ]);
    }

}
