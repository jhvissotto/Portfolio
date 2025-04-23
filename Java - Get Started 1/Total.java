import java.util.*;


public class Main {
    public static void main(String[] args) {
 
        List<Integer> X = Arrays.asList(10, 20, 30, 40, 50);
 
        int Y = X.stream().reduce(0, (cum, x) -> cum + x);
 
        System.out.println(Y);
    }
}