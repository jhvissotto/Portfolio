package backend;

import io.javalin.Javalin;
import io.github.cdimascio.dotenv.Dotenv;


public class Main {
    public static void main(String[] args) {
        
        Dotenv env = Dotenv.load();
        int ENV_SERVER_PORT = Integer.parseInt(env.get("SERVER_PORT"));

        
        Javalin server = Server_router.exe();
            
        server.start(ENV_SERVER_PORT);
    }
}
