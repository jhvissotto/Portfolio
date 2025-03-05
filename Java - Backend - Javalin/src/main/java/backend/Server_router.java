package backend;

import io.javalin.Javalin;
import java.util.List;
import java.util.Map;

import org.mindrot.jbcrypt.BCrypt;

import org.jooq.DSLContext;
import org.jooq.impl.DSL;
import org.jooq.SelectJoinStep;
import org.jooq.Result;

import database.*;



public class Server_router {
    public static Javalin exe() {

        Javalin server = Server.create();
        

        // ========================================= //
        // ================ Welcome ================ //
        // ========================================= //
        server.get("/", ctx -> {
            ctx.result("Welcome"); 
        });
        
        
        // ======================================== //
        // ================ Parser ================ //
        // ======================================== //
        server.get("/parser/{slug1}/{slug2}", ctx -> {
            
            String slug1  = ctx.pathParam("slug1");
            String slug2  = ctx.pathParam("slug2");
            String param1 = ctx.queryParam("param1");
            String param2 = ctx.queryParam("param2");

            ctx.json(Map.of(
                "slug1",  slug1,
                "slug2",  slug2,
                "param1", param1,
                "param2", param2
            ));
        });


        // ====================================== //
        // ================ Auth ================ //
        // ====================================== //
        server.get("/auth-pwd-code", ctx -> {  
            String password = "ABC123"; 
            String hashed   =  BCrypt.hashpw(password, BCrypt.gensalt());
            ctx.json(Map.of("hashed", hashed));
        }); 
        
        
        server.get("/auth-pwd-check", ctx -> {  
            String  password = "ABC123";
            String  hashed   = "$2a$10$NEthZtIcabO02lR65OcJz.qsvIXee0YCdtl5pJ86vSbqQC3sQBVje";
            Boolean isValid  =  BCrypt.checkpw(password, hashed); 
            ctx.json(Map.of("isValid", isValid));
        }); 

        
        server.get("/auth-jwt-code", ctx -> { 
            String email = "user@mail";
            String token = Auth.jwt_code(Map.of("email", email), 7*(24*60*60));
            ctx.json(Map.of("token", token));
        });
        
        
        server.get("/auth-jwt-check", ctx -> {  
            String  token   = "eyJhbGciOiJIUzUxMiJ9.eyJlbWFpbCI6InVzZXJAbWFpbCIsImlhdCI6MTc0MTE0ODMwOCwiZXhwIjoxNzQxNzUzMTA4fQ.CZ3NK_YCRBLA68jFaflWRqb4TFH1WoiZMeF3Ug4cZ2UEFx6rcZLvG61esxrOD43YOUpC6y1GvZIw2zOtBpQyxg";
            Boolean isValid = Auth.jwt_check(token);
            ctx.json(Map.of("isValid", isValid));
        });


        // ========================================== //
        // ================ Database ================ //
        // ========================================== //
        server.get("/dbase-read", ctx -> {  
            try {
                DSLContext      db_con  = _Connection.exe();
                SelectJoinStep  query   = db_con.select().from(DSL.table("'Table'"));
                List            res     = query.fetch().intoMaps();
                ctx.json(res) ;
            } catch (Exception E) {
                ctx.result("Exception"); 
            }
        });
        
        server.get("/dbase-bind", ctx -> {
            try {
                String     SQL    = "SELECT * FROM 'Table' WHERE ColA = ?";
                String     search = ctx.queryParam("search");
                DSLContext db_con = _Connection.exe();
                Result     query  = db_con.fetch(SQL, search);
                List       res    = query.intoMaps();
                ctx.json(res);
            } catch (Exception E) {
                ctx.result("Exception");
            }
        });

        
        return server;
    }
}