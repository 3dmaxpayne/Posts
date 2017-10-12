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

    /**
     * @var AuthorValidator
     */
    protected $validator;

    public function __construct(AuthorRepository $repository, AuthorValidator $validator)
    {
        $this->repository = $repository;
    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $authors = $this->repository->all();


        return response()->json([
            'authors' => $authors,
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
        $author = $this->repository->with('books')->find($id);

        return response()->json([
            'author' => $author,
        ]);
    }

}
