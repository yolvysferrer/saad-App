<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IncludeToken
{
  
    public function handle(Request $request, Closure $next): Response
    {
        $request->headers->set('X-API-TOKEN', env('API_GATEWAY_TOKEN'));
        return $next($request);
    }
}
