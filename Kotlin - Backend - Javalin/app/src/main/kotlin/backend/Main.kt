package backend

import io.github.cdimascio.dotenv.dotenv


val dotenv = dotenv()

object ENV {
    val SERVER_PORT: Int = dotenv["SERVER_PORT"]?.toIntOrNull() ?: 7070  
    val AUTH_SECRET      = dotenv["AUTH_SECRET"]
}


fun main() {
    val server = Server_router()
    server.start(ENV.SERVER_PORT)
}