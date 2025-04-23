fun main() {
    
    val X = listOf(-20, -10, 0, +10, +20)
    val Y = X.filter { it > 0 }

    println(Y)
}

main()