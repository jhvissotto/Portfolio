package database

import java.sql.DriverManager
import io.github.cdimascio.dotenv.dotenv

import org.jooq.DSLContext
import org.jooq.impl.DSL
import org.jooq.SQLDialect



val dotenv = dotenv()

object ENV {
    val DBASE_PATH = dotenv["DBASE_PATH"] ?: "jdbc:sqlite:storage.db" 
}


fun Connection(): DSLContext {
    val con     = DriverManager.getConnection(ENV.DBASE_PATH)
    val sqlite  = DSL.using(con, SQLDialect.SQLITE)
    return sqlite
}