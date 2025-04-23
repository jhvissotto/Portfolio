import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;


public class Filter {
    public static void main(String[] args) {

        List<Integer> X = Arrays.asList(-20, -10, 0, +10, +20);
        
        List<Integer> Y = X.stream().filter(x -> x > 0).collect(Collectors.toList());

        System.out.println(Y);
    }
}