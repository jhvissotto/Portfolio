open class Class1 {
    var prop1: String = "prop1"
    var init1: String


    constructor(init1: String) {
        this.init1 = init1
    }
    constructor(): this("init1")


    fun func1(arg1: String): List<Any> {
        return listOf(prop1, init1, arg1)
    }
    fun func1(): List<Any> { return func1("arg1") }
}



class Class2 : Class1 {
    var prop2: String = "prop2"
    var init2: String


    constructor(init2: String): super() {
        this.init2 = init2
    }
    constructor(): this("init2")


    fun func2(arg2: String): List<Any> {
        return listOf(prop1, init1, func1(), prop2, init2, arg2)
    }
    fun func2(): List<Any> { return func2("arg2") }
}



fun main() {
    val obj2 = Class2()
    println(obj2.func2())
}

main()