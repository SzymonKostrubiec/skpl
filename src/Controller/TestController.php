<?php

namespace SzymonKostrubiec\Skpl\Controller;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Twig\Environment;

class TestController
{

    public function __construct(
        private readonly Environment $twig,
    )
    {
    }

    public function __invoke():Response
    {
        return new Response($this->twig->render('base.html.twig'));
    }
}