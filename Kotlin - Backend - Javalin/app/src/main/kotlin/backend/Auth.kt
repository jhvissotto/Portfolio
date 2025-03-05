package backend

import java.util.Date
import at.favre.lib.crypto.bcrypt.BCrypt

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.exceptions.TokenExpiredException



fun Auth_pwd_code(password:String, salt:Int=12): String {
    val hashed = BCrypt.withDefaults().hashToString(salt, password.toCharArray())
    return hashed
}

fun Auth_pwd_check(password:String, hashed:String): BCrypt.Result {
    val result = BCrypt.verifyer().verify(password.toCharArray(), hashed)
    return result
}



fun Auth_jwt_code(content:String, duration:Int=7*24*60*60): String {
    
    val ALGO  = Algorithm.HMAC256(ENV.AUTH_SECRET)
    val exp   = System.currentTimeMillis() + duration*1000

    val token = JWT.create()
        .withIssuer("Issuer")
        .withSubject("Subject")
        .withClaim("Claim", content) 
        .withExpiresAt(Date(exp))
        .sign(ALGO)
    
    return token
}



data class Result(val value: Boolean, val status: String)

fun Auth_jwt_check(token:String): Result {
    try {
        JWT.require(Algorithm.HMAC256(ENV.AUTH_SECRET)).withIssuer("Issuer").build().verify(token)
        return Result(true, "VALID")
    } 
    catch (E: TokenExpiredException) {
        return Result(false, "EXPIRED")
    } 
    catch (E: Exception) {
        return Result(false, "INVALID")
    }
}