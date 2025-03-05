<?php
use Psr\Http\Message\ServerRequestInterface as Req;
use Psr\Http\Message\ResponseInterface      as Res;


function Router($server) {
    $server->get('/', function (Req $req, Res $res) {
        $res->getBody()->write('Welcome');
        return $res;
    });
};

return 'Router';