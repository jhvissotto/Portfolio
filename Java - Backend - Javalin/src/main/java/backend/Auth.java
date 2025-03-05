package backend;

import java.util.Date;
import java.util.Map;
import javax.crypto.SecretKey;

import io.github.cdimascio.dotenv.Dotenv;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;



public class Auth {
    
    public static final String ENV_AUTH_SECRET;
    public static final SecretKey secretKey;
    static {
        Dotenv env      = Dotenv.load();
        ENV_AUTH_SECRET = env.get("AUTH_SECRET");
        secretKey       = Keys.hmacShaKeyFor(ENV_AUTH_SECRET.getBytes());
    }


    // ========================================== // 
    // ================ jwt code ================ // 
    // ========================================== // 
    public static String jwt_code(Map<String, ?> content, int exp) {
        String token = Jwts.builder()
            .setSubject("Subject")
            .setClaims(content)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + exp * 1000))
            .signWith(secretKey)
            .compact();
        return token;
    }


    // =========================================== // 
    // ================ jwt check ================ // 
    // =========================================== // 
    public static boolean jwt_check(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token); 
            return true;
        } catch (Exception E) {
            return false;
        } 
    }
}