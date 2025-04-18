#include <iostream>
using namespace std;


void greetings_1() {
    cout << "Wellcome" << endl;
}

void greetings_2(string txt1 = "Hello", string txt2 = "World") {
    cout << txt1 + "  " + txt2 << endl;
}


void _get_started() {
    greetings_1();
    greetings_2();
}