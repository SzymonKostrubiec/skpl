<?php

namespace SzymonKostrubiec\Skpl\Controller;

use Symfony\Component\HttpFoundation\Response;

class TestController
{
    public function __construct(
    ){
    }

    public function __invoke():Response
    {
        return new Response();
    }
}