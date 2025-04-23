import java.time.LocalDateTime


enum class Enum { AAA, BBB, CCC }

data class DTO(
    val bool: Boolean,
    val num:  Int,
    val text: String,
    val enum: Enum ,
    val time: LocalDateTime
)

val data = listOf(
    DTO(true, 123, "text", Enum.AAA, LocalDateTime.now()),
    DTO(true, 456, "text", Enum.BBB, LocalDateTime.now()),
    DTO(true, 789, "text", Enum.CCC, LocalDateTime.now()),
)