<?php

namespace App\Http\Controllers\API;

use App\Models\Cars;
use App\Http\Controllers\Controller;
use App\Http\Requests\CarRequest;
use App\Models\Car;

class CarController extends Controller
{
    /**
     * Display all Cars.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cars= Car::orderByDesc('id')->get();
        return response()->json(compact('cars'));
    }

    /**
     * Store car.
     * @return \Illuminate\Http\Response
     */
    public function store(CarRequest $request)
    {
        
        $data = $request->all();
        $car = Car::create($data);

        return response()->json(compact('car'));
    }

    /**
     * Delete car.
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $car= Car::find($id);

        return $car->delete();
    }

    /**
     * Update Cars.
     * @return \Illuminate\Http\Response
     */
    public function updateCar(CarRequest $request, $id)
    {
        $car= Car::find($id);

        return $car->update($request->all());
        
    }

}
