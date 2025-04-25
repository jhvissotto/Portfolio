// =========================================== // 
// ================ Counter 1 ================ // 
// =========================================== // 
class Counter1 {
    int initial;
    int value;

    Counter1(int inival) {
        this.initial = inival;
        this.value   = inival;
    }

    Counter1 increment()     { this.value ++ ;              return this;       }
    Counter1 decrement()     { this.value -- ;              return this;       }
    Counter1 add(int by)     { this.value += by;            return this;       }
    Counter1 sub(int by)     { this.value -= by;            return this;       }
    Counter1 set(int by)     { this.value  = by;            return this;       }
    Counter1 reset()         { this.value  = this.initial;  return this;       }
    int      get()           {                              return this.value; }
}


// =========================================== // 
// ================ Counter 2 ================ // 
// =========================================== // 
class Counter2 {
    Counter1 counter_1;

    Counter2(int inival) {
        this.counter_1 = new Counter1(inival);
    }

    Counter2 increment()     { this.counter_1.increment();  return this;                 }
    Counter2 decrement()     { this.counter_1.decrement();  return this;                 }
    Counter2 add(int by)     { this.counter_1.add(by);      return this;                 }
    Counter2 sub(int by)     { this.counter_1.sub(by);      return this;                 }
    Counter2 set(int by)     { this.counter_1.set(by);      return this;                 }
    Counter2 reset()         { this.counter_1.reset();      return this;                 }
    int      get()           {                              return this.counter_1.get(); }
}