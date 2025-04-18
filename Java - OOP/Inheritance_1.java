class Class1 {
    String prop1 = "prop1";
    String func1() { return "func1"; }
}


class Class2 extends Class1 {
    String prop2 = "prop2";
    String func2() { return "func2"; }
}


public class Inheritance_1 {
    public static void main(String[] args) {
        Class2 obj2 = new Class2();

        System.out.println(obj2.prop1);
        System.out.println(obj2.func1());
        System.out.println(obj2.prop2);
        System.out.println(obj2.func2());
    }
}
