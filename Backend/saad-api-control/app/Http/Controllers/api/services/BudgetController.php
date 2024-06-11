<?php

namespace App\Http\Controllers\api\services;
use Illuminate\Support\Facades\Http;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BudgetController extends Controller
{
    
    public function getEndpoint($endpoint)
    {
        $response = Http::withHeaders([
            'X-API-TOKEN' => env('API_GATEWAY_TOKEN'),
        ])->get('http://localhost:8001/' . $endpoint);

        return $response->json();
    }

    public function postEndpoint(Request $request, $endpoint)
    {
        $response = Http::withHeaders([
            'X-API-TOKEN' => env('API_GATEWAY_TOKEN'),
        ])->post('http://localhost:8001/' . $endpoint, $request->all());

        return $response->json();
    }
}
