<?php
use Slim\Factory\AppFactory;


function Server() {
    $server = AppFactory::create();
    return $server;
}

return 'Server';