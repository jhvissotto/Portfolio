#include <iostream>
#include <string>
using namespace std;


class Class1 {
    public:
        string prop1 = "prop1";
        string func1() { return "func1"; }
};


class Class2: public Class1 {
public:
    string prop2 = "prop2";
    string func2() { return "func2"; }
};


int main() {
    Class2 obj2;
    
    cout 
        << ",  obj2.prop1: " << obj2.prop1 
        << ",  obj2.func1: " << obj2.func1() 
        << ",  obj2.prop2: " << obj2.prop2 
        << ",  obj2.func2: " << obj2.func2() 
    << endl;
    
    return 0;
}