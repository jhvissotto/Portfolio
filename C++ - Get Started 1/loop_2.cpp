#include <iostream>
#include <map>
using namespace std;


int main() {
    map<int, string> X = {{10, "AA"}, {20,"BB"}, {30,"CC"}};

    for (const auto& [key, val] : X) {
        cout << key << val << endl;
    }

    return 0;
}