<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('cars')->truncate();

        DB::table('cars')->insert([
            [
                'name' => 'Aston Martin',
                'price' => 20984,
                'brand' => 'kia',
                'model' => 'a4',
                'year' => 2015,
            ],
            [
                'name' => 'Audi',
                'price' => 20984,
                'brand' => 'nissan',
                'model' => 'alpina-b6-gran-coupe',
                'year' => 2016,
            ],
            [
                'name' => 'Alfa Rome',
                'price' => 20984,
                'brand' => 'jaguar',
                'model' => 'a3-sportback-e-tron',
                'year' => 2017,
            ],
            ]);
    }
}
