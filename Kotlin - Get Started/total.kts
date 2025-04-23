fun main() {

    val X = listOf(10, 20, 30, 40, 50)
    val Y = X.reduce { cum, x -> cum + x }

    println(Y)
}

main()