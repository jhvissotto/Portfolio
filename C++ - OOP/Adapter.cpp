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
    
        Counter_1& increment() { return counter_1.increment(); }
        Counter_1& decrement() { return counter_1.decrement(); }
        Counter_1& add(int by) { return counter_1.add(by);     }
        Counter_1& sub(int by) { return counter_1.sub(by);     }
        Counter_1& set(int by) { return counter_1.set(by);     }
        Counter_1& reset()     { return counter_1.reset();     }
        int        get() const { return counter_1.get();       }
};