// =========================================== // 
// ================ Counter 1 ================ // 
// =========================================== // 
class Counter_1 {
    initial: number
    value:   number

    constructor(inival: number) {
        this.initial = inival
        this.value   = inival
    }

    increment()     { this.value ++ ;              return this       }
    decrement()     { this.value -- ;              return this       }
    add(by: number) { this.value += by;            return this       }
    sub(by: number) { this.value -= by;            return this       }
    set(by: number) { this.value  = by;            return this       }
    reset()         { this.value  = this.initial;  return this       }
    get()           {                              return this.value }
}


// =========================================== // 
// ================ Counter 2 ================ // 
// =========================================== // 
class Counter_2 {
    counter_1:  InstanceType<typeof Counter_1>
    // initial:    number
    // value:      number

    constructor(inival: number, _Counter_1 = Counter_1) {
        this.counter_1  = new _Counter_1(inival)
        // this.initial    = initial
        // this.value      = initial
    }

    increment()     { this.counter_1.increment();   return this;                }
    decrement()     { this.counter_1.decrement();   return this;                }
    add(by: number) { this.counter_1.add(by);       return this;                }
    sub(by: number) { this.counter_1.sub(by);       return this;                }
    set(by: number) { this.counter_1.set(by);       return this;                }
    reset()         { this.counter_1.reset();       return this;                }
    get()           {                               return this.counter_1.get() }
}


// ===================================== // 
// ================ Run ================ // 
// ===================================== // 
(function main() {
    const counter2 = new Counter_2(0)
    const value    = counter2.add(100).sub(10).increment().decrement().get()
    console.log({ value })
}())
