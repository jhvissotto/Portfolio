#include <iostream>
#include <vector>
#include <ranges>
using namespace std;


int main() {
    vector<int> X = {-20, -10, 0, 10, 20};

    auto Y = X | views::filter([](int x) { return x > 0; });

    return 0;
}
