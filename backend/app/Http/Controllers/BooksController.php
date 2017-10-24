<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
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



    public function index()
    {
        $books = $this->repository->with('authors', 'comments', 'genres')->all();
        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        $books = $books->shuffle()->limit(20)->get();

        return new JsonResponse($books);
    }

    public function topRated($page = 1)
    {
        $books = $this->repository->all();
        $books = $books->groupBy(function ($book) {
            return $book->rank;
        });
        $books = $books->limit(20);
        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        return new JsonResponse($books);

    }

    public function topCommented($page = 1)
    {
        $books = $this->repository->all();
        $books = $books->groupBy(function ($book) {
            return $book->comments->count();
        });
        $books = $books->limit(20);

        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        return new JsonResponse($books);
    }

    public function bestSellers($page = 1)
    {
        $books = $this->repository->all();
        $books = $books->groupBy(function ($book) {
            return $book->rank;
        });
        $books = $books->limit(20);

        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        return new JsonResponse($books);
    }

    public function newest()
    {
        $books = $this->repository->all();
        $books = $books->groupBy('created_at');
        $books = $books->limit(20);

        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        return new JsonResponse($books);
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
