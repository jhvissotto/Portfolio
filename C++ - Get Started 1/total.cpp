#include <iostream>
#include <vector>
#include <numeric>  
using namespace std;


int main() {
    vector<int> X = {10, 20, 30, 40, 50};

    int Y = accumulate(X.begin(), X.end(), 0);

    cout << Y << endl;
    return 0;
}