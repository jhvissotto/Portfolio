#include <iostream>
#include <string>
#include <vector>
#include <nlohmann/json.hpp> 

using namespace std;
using json = nlohmann::json;


int main() {

    struct Item {
        bool*   bool_value;
        double  value;
        string  text;
    };

    string A = json::array({
        {{"bool",nullptr}, {"value",nan("")}, {"text","AAA"}},
        {{"bool",false},   {"value",123},     {"text","BBB"}},
        {{"bool",true},    {"value",456},     {"text","CCC"}}
    }).dump();  

    json B = json::parse(R"([{"bool":null,"value":null,"text":"AAA"},{"bool":false,"value":123,"text":"BBB"},{"bool":true,"value":456,"text":"CCC"}])");
    
    return 0;
}
