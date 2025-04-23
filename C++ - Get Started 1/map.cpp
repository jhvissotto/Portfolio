#include <iostream>
#include <vector>
#include <ranges>
using namespace std;


int main() {
    vector<int> X = {0, 1, 2, 3, 4};

    auto Y = X | views::transform([](int x) { return x * x; });

    return 0;
}