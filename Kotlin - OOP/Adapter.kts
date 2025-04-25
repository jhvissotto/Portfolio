// =========================================== // 
// ================ Counter 1 ================ // 
// =========================================== // 
class Counter1(val initial: Int) {
    var value: Int = initial

    fun increment()     : Counter1 { value++;         return this  }
    fun decrement()     : Counter1 { value--;         return this  }
    fun add(by: Int)    : Counter1 { value += by;     return this  }
    fun sub(by: Int)    : Counter1 { value -= by;     return this  }
    fun set(by: Int)    : Counter1 { value = by;      return this  }
    fun reset()         : Counter1 { value = initial; return this  }
    fun get()           : Int      {                  return value }
}


// =========================================== // 
// ================ Counter 2 ================ // 
// =========================================== // 
class Counter2(inival: Int) {
    val counter1     : Counter1 = Counter1(inival)
    fun increment()  : Counter2 { counter1.increment(); return this           }
    fun decrement()  : Counter2 { counter1.decrement(); return this           }
    fun add(by: Int) : Counter2 { counter1.add(by);     return this           }
    fun sub(by: Int) : Counter2 { counter1.sub(by);     return this           }
    fun set(by: Int) : Counter2 { counter1.set(by);     return this           }
    fun reset()      : Counter2 { counter1.reset();     return this           }
    fun get()        : Int      {                       return counter1.get() }
}


// ===================================== // 
// ================ Run ================ // 
// ===================================== // 
fun main() {
    val counter2 = Counter2(0)
    val value    = counter2.add(100).sub(10).increment().decrement().get()
    println(value)
}

main()
