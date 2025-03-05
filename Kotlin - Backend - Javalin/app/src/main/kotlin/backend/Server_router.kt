package backend

import io.javalin.Javalin
import org.jooq.impl.DSL

import kotlinx.serialization.*
import kotlinx.serialization.json.*

import backend.*
import database.*



fun Server_router(): Javalin {
    val server = Server()


    // ========================================== //
    // ================ Wellcome ================ //
    // ========================================== //
    server.get("/") { ctx -> 
        ctx.result("Welcome") 
    }
    

    // ========================================= //
    // ================ Req/Res ================ //
    // ========================================= //
    server.get("/parser/{slug1}/{slug2}") { ctx ->
        
        val slug1  = ctx.pathParam("slug1")
        val slug2  = ctx.pathParam("slug2")
        val param1 = ctx.queryParam("param1")
        val param2 = ctx.queryParam("param2")

        ctx.json(mapOf(
            "slug1"  to slug1,
            "slug2"  to slug2,
            "param1" to param1,
            "param2" to param2
        ))
    }
    

    // ====================================== //
    // ================ Auth ================ //
    // ====================================== //
    server.get("/auth-pwd-code") { ctx -> 
        val password = "ABC123"
        val hashed   = Auth_pwd_code(password)
        ctx.json(mapOf("hashed" to hashed))
    }
    
    
    server.get("/auth-pwd-check") { ctx -> 
        val password = "ABC123"
        val hashed   = "SOME_HASH"
        val result   = Auth_pwd_check(password, hashed) 
        ctx.json(result)
    }

    
    server.get("/auth-jwt-code") { ctx -> 
        val content = mapOf("email" to "user@mail")
        val token = Auth_jwt_code(Json.encodeToString(content))
        ctx.json(mapOf("token" to token))
    }
    
    
    server.get("/auth-jwt-check") { ctx -> 
        val token  = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJJc3N1ZXIiLCJzdWIiOiJTdWJqZWN0IiwiQ2xhaW0iOiJ7XCJlbWFpbFwiOlwidXNlckBtYWlsXCJ9IiwiZXhwIjoxNzQxNzQzNzUwfQ.o0sB1d8gSbJrgolhbTsmbl0HV0iiRJS_BmLqmOXW0x4"
        val result = Auth_jwt_check(token)
        ctx.json(result)
    }


    // ========================================== //
    // ================ DATABASE ================ //
    // ========================================== //
    server.get("/dbase-read") { ctx -> 
        val db_con  = Connection()
        val query   = db_con.select().from(DSL.table("'Table'"))
        val res     = query.fetch().intoMaps()      
        ctx.json(res) 
    }
    
    server.get("/dbase-bind") { ctx ->
        val SQL     = """
            SELECT * 
            FROM 'Table' 
            WHERE ColA = ?
        """
        val search  = ctx.queryParam("search")
        val db_con  = Connection()
        val query   = db_con.fetch(SQL, search)
        val res     = query.intoMaps()
        ctx.json(res) 
    }


    return server
}