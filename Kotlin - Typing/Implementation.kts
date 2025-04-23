interface ICounter {
    val _initial:    Int
    var _value:      Int

    fun reset():     ICounter
    fun increment(): ICounter
    fun decrement(): ICounter
    fun add(by:Int): ICounter
    fun sub(by:Int): ICounter
    fun set(by:Int): ICounter
    fun get():       Int
}


class Counter(val initial: Int): ICounter {
    override val _initial: Int = initial
    override var _value:   Int = initial

    override fun reset():     ICounter { _value  = _initial; return this        }
    override fun increment(): ICounter { _value ++ ;         return this        }
    override fun decrement(): ICounter { _value -- ;         return this        }
    override fun add(by:Int): ICounter { _value += by;       return this        }
    override fun sub(by:Int): ICounter { _value -= by;       return this        }
    override fun set(by:Int): ICounter { _value  = by;       return this        }
    override fun get():       Int      {                     return this._value }
}