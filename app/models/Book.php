<?php

namespace App\models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;

class Book extends Model implements Transformable
{
    use TransformableTrait;

    protected $fillable = [
        'title',
        'description',
        'image',
        'date',
        'price',
        'file'
    ];

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'authors_books_pivot');
    }

    public function genres()
    {
        return $this->belongsToMany(Genre::class, 'genres_books_pivot');
    }

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }


}
