#include <iostream>
#include <string>
#include <vector>
#include <ctime>
using namespace std;


enum class Enum { AAA, BBB, CCC };

struct DTO {
    bool    boolean;
    int     numeric;
    string  text;
    Enum    option;
    time_t  timer;  

    DTO(bool B, int N, const string& S, EnumType E, time_t T): 
        boolean(B), 
        numeric(N), 
           text(S), 
         option(E), 
          timer(T) {}
};

vector<DTO> data = {
    {true, 123, "text", Enum::AAA, time(nullptr)},
    {true, 456, "text", Enum::BBB, time(nullptr)},
    {true, 789, "text", Enum::CCC, time(nullptr)}
};