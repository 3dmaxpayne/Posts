<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Repositories\AuthorRepository;
use App\Validators\AuthorValidator;


class AuthorsController extends Controller
{

    /**
     * @var AuthorRepository
     */
    protected $repository;

    public function __construct(AuthorRepository $repository, AuthorValidator $validator)
    {
        $this->repository = $repository;
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
        $author = $this->repository->with(['books', 'books.genres', 'books.comments'])->find($id);

        if ($author) {
            foreach ($author->books as $book) {
                $book['rank'] = $book->rank;
            }
        } else {
            return abort(404);
        }


        return response()->json($author);
    }

}
