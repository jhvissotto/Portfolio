#include <iostream>
using namespace std;


class Counter {
    public: 
        int ini;
        int val;

    Counter(int ini = 0): 
        ini(ini), 
        val(ini) {}

    Counter& set(int _new)    { val = _new;       return *this; }
    Counter& reset()          { val =  ini;       return *this; }
    Counter& increment()      { val ++ ;          return *this; }
    Counter& decrement()      { val -- ;          return *this; }
    Counter& add(int by = 1)  { val += by;        return *this; }
    Counter& sub(int by = 1)  { val -= by;        return *this; }
    Counter& mul(int by)      { val  = val * by;  return *this; }
    Counter& div(int by)      { val  = val / by;  return *this; }
    int      get()            {                   return   val; }
};


int main() {
    Counter counter;
    int value = counter.add(100).sub(10).increment().decrement().get();
    cout << "value: " << value << endl;
    return 0;
}