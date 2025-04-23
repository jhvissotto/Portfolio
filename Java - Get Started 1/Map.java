import java.util.*;
import java.util.stream.*;


public class Main {
    public static void main(String[] args) {

        List<Integer> X = Arrays.asList(0, 1, 2, 3, 4);

        List<Integer> Y = X.stream().map(x -> x * x).collect(Collectors.toList());
 
        System.out.println(Y);
    }
}