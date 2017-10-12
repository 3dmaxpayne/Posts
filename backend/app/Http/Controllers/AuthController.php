<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function authenticate(Request $request)
    {
        // grab credentials from the request
        $credentials = $request->only(['email', 'password']);

        try {
            // attempt to verify the credentials and create a token for the user
            if (! $token = \JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // all good so return the token
        return response()->json(compact('token'));
    }

    public function logout ()
    {
        $token = \JWTAuth::getToken();
        \JWTAuth::invalidate($token);
        $user = \JWTAuth::parseToken()->authenticate();
        return response()->json(['message' => 'You\'ve been logged out'], 200);
    }

    public function register(Request $request)
    {
        $this->validate($request,
            [
                'email' => 'required|email',
                'password' => 'required'
            ]);
        $data = $request->only('email', 'name');
        $data['password'] = bcrypt($request->get('password'));
        try {
            $user = User::create($data);
        } catch (\Exception $e) {
            return response()->json($e->getMessage());
        }
        $token = \JWTAuth::fromUser($user);
        return response()->json(compact('token'));
    }
}
