import java.util.List;
import java.util.Arrays;



class Class1 {
    String prop1 = "prop1";
    String init1;
    
    Class1(String init1) { this.init1 = init1;  }
    Class1()             { this("init1"); }

    List<Object> func1(String arg1) { return Arrays.asList(prop1, init1, arg1); }
    List<Object> func1()            { return func1("arg1"); }
}



class Class2 extends Class1 {
    String prop2 = "prop2";
    String init2;

    Class2(String init2) {
        super(); 
        this.init2 = init2;
    }
    Class2() { this("init2"); }

    List<Object> func2(String arg2) { return Arrays.asList(prop1, init1, func1(), prop2, init2, arg2); }
    List<Object> func2()            { return func2("arg2"); }
}



public class Inheritance_2 {
    public static void main(String[] args) {
        Class2 obj2 = new Class2();
        System.out.println(obj2.func2());
    }
}