package backend

import io.javalin.Javalin


fun Server(): Javalin {
    val server = Javalin.create()
    return server
}