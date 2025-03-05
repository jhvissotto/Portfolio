<?php

$Server = require __DIR__ . '/Server.php';
$Router = require __DIR__ . '/Router.php';


function main() {
    $server = Server();
    Router($server);
    $server->run();
}

return 'main';