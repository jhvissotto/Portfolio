#include <iostream>
#include <vector>
#include <string>
using namespace std;



class Class1 {
    public:
        string prop1 = "prop1";
        string init1;

    public:
        Class1(string init1 = "init1") {
            this->init1 = init1;
        }

        vector<string> func1(string arg1 = "arg1") {
            return {prop1, init1, arg1};
        }
};



class Class2: public Class1 {
    public:
        string prop2 = "prop2";
        string init2;

    public:
        Class2(string init2 = "init2"): Class1() {
            this->init2 = init2;
        }
        
        vector<string> func2(string arg2 = "arg2") { 
            vector<string> _return = {};
            vector<string> _func1  = this->func1(); 
            
            _return.insert(_return.end(), { this->prop1, this->init1 });
            _return.insert(_return.end(), _func1.begin(), _func1.end());
            _return.insert(_return.end(), { this->init2, this->prop2, arg2 });
            return _return;
        }
};


int main() {
    Class2 obj2;

    int idx = 0;
    for (const string& item : obj2.func2()) {
        cout << idx << item << endl;
        idx++;
    }
    cout << endl;

    return 0;
}