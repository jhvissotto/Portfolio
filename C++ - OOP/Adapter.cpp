// =========================================== //
// ================ Counter 1 ================ //
// =========================================== //
class Counter_1 {
    private:
        int initial;
        int value;
    
    public:
        Counter_1(int inival): 
            initial(inival), 
            value(inival) 
        {}
    
        Counter_1& increment() { value ++ ;         return *this; }
        Counter_1& decrement() { value -- ;         return *this; }
        Counter_1& add(int by) { value += by;       return *this; }
        Counter_1& sub(int by) { value -= by;       return *this; }
        Counter_1& set(int by) { value  = by;       return *this; }
        Counter_1& reset()     { value  = initial;  return *this; }
        int        get() const {                    return value; }
};


// =========================================== //
// ================ Counter 2 ================ //
// =========================================== //
class Counter_2 {
    private:
        Counter_1 counter_1;
    
    public:
        Counter_2(int inival): 
            counter_1(inival) 
        {}
    
        Counter_2& increment() { counter_1.increment(); return *this;           }
        Counter_2& decrement() { counter_1.decrement(); return *this;           }
        Counter_2& add(int by) { counter_1.add(by);     return *this;           }
        Counter_2& sub(int by) { counter_1.sub(by);     return *this;           }
        Counter_2& set(int by) { counter_1.set(by);     return *this;           }
        Counter_2& reset()     { counter_1.reset();     return *this;           }
        int        get() const {                        return counter_1.get(); }
};


// ===================================== //
// ================ Run ================ //
// ===================================== //
#include <iostream>
using namespace std;

int main() {
    Counter_2 counter(100);
    int value = counter.add(100).sub(10).increment().get(); 
    cout << value << endl;
    return 0;
}
