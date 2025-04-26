import kotlinx.serialization.*
import kotlinx.serialization.json.*


@Serializable
data class Item(
    val bool:   Boolean?, 
    val value:  Double?, 
    val text:   String
)


fun main() {

    val A = Json.encodeToString(listOf(
        Item(null,  Double.NaN, "AAA"),
        Item(false, 123.0,      "BBB"),
        Item(true,  456.0,      "CCC")
    ))

    println(A)


    val B: List<Item> = Json.decodeFromString("""[{"bool":null,"value":null,"text":"AAA"},{"bool":false,"value":123,"text":"BBB"},{"bool":true,"value":456,"text":"CCC"}]""")

    println(B)
}

main()