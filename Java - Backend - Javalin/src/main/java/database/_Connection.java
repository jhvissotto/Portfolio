package database;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.DriverManager; 
import io.github.cdimascio.dotenv.Dotenv;

import org.jooq.DSLContext; 
import org.jooq.impl.DSL; 
import org.jooq.SQLDialect; 



public class _Connection {
    public static DSLContext exe() {
        
        Dotenv env = Dotenv.load();
        String ENV_DBASE_PATH = env.get("DBASE_PATH");

        try {
            Connection con     = DriverManager.getConnection(ENV_DBASE_PATH);
            DSLContext sqlite  = DSL.using(con, SQLDialect.SQLITE);
            return sqlite;
        } catch (SQLException E) {
            System.out.println(E); 
            return null;
        }
    }
}