import java.util.*;

public class Main {
    public static void main(String[] args) {
 
        Map<Integer, String> X = Map.of(10,"AA", 20,"BB", 30,"CC");
        
        X.forEach((key, val) -> {
            System.out.println(Map.of("key",key, "val",val));
        });
    }
}