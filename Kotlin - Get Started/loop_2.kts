fun main() {
    val x = mapOf(10 to "AA", 20 to "BB", 30 to "CC")

    for ((key, value) in x) {
        println("key: $key, value: $value")
    }
}

main()