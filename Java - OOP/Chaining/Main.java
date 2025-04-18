package Chaining;

public class Main {
    public static void main(String[] args) {
        Counter counter = new Counter();
        int value = counter.add(100).sub(10).increment().decrement().get();
        System.out.println("value: " + value);
    }
}