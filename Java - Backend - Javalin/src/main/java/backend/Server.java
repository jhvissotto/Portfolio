package backend;

import io.javalin.Javalin;


public class Server {
    public static Javalin create() {

        Javalin server = Javalin.create();
            
        return server;
    }
}
