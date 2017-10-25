<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\BookRepository;
use App\Validators\BookValidator;


class BooksController extends Controller
{
    protected $repository;

    public function __construct(BookRepository $repository, BookValidator $validator)
    {
        $this->repository = $repository;
    }

    public function index()
    {
        $books = $this->repository->with('authors', 'comments', 'genres')->all();
        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        $books = $books->shuffle()->chunk(20)[0];

        return new JsonResponse($books);
    }

    public function topRated()
    {
        $books = $this->repository->all();
        $books = $books->sortByDesc(function ($book, $key) {
            return floatval($book->rank);
        });
        $books = $books->chunk(20)[0];
        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }
        $books = $books->values()->all();

        return response()->json($books);

    }

    public function topCommented()
    {
        $books = $this->repository->all();
        $books = $books->sortByDesc(function ($book) {
            return $book->comments->count();
        });
        $books = $books->chunk(20)[0];

        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        $books = $books->values()->all();

        return new JsonResponse($books);
    }

    public function bestSellers()
    {
        $books = $this->repository->all();
        $books = $books->sortByDesc(function ($book) {
            return $book->rank;
        });
        $books = $books->chunk(20)[0];

        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        $books = $books->values()->all();

        return new JsonResponse($books);
    }

    public function newest()
    {
        $books = $this->repository->all();
        $books = $books->sortByDesc('created_at');
        $books = $books->chunk(20)[0];

        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        $books = $books->values()->all();

        return new JsonResponse($books);
    }

    public function allBooks() {
        $books = $books = $this->repository->all();
        foreach ($books as $book) {
            $book['rank'] = $book->rank;
        }

        return new JsonResponse($books);
    }

    public function sales() {
        $books = $books = $this->repository->all();
        $books = $books->filter(function ($item)
        {
            return $item->sales_price != null;
        });
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
