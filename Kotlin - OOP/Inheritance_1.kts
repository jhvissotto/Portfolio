open class Class1 {
    var prop1: String = "prop1"
    fun func1(): String = "func1"
}



class Class2 : Class1() {
    var prop2: String = "prop2"
    fun func2(): String = "func2"
}



fun main() {
    val obj2 = Class2()

    println(obj2.prop1)
    println(obj2.func1())
    println(obj2.prop2)
    println(obj2.func2())
}

main()