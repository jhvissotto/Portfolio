class Counter(val initial: Int = 0) {
    var value = initial

    fun _set(by: Int)      = apply { value  = by         }
    fun  reset()           = apply { value  = initial    }
    fun  increment()       = apply { value ++            }
    fun  decrement()       = apply { value --            }
    fun  add(by: Int = 1)  = apply { value += by         }
    fun  sub(by: Int = 1)  = apply { value -= by         }
    fun  mul(by: Int)      = apply { value  = value * by }
    fun  div(by: Int)      = apply { value  = value / by }
    fun _get()             =         value
}


fun main() {
    val counter = Counter(0)
    val result = counter.add(100).sub(10).increment().decrement()._get()
    println(result)  
}

main()