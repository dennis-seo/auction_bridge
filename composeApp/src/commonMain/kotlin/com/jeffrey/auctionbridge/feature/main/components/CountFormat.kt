package com.jeffrey.auctionbridge.feature.main.components

/**
 * KMP 환경(JVM/JS/Native)에서 안전한 천 단위 콤마 포맷.
 * java.text.NumberFormat 은 wasmJs/iOS에 없음.
 */
internal fun Int.formatWithComma(): String {
    val s = this.toString()
    val sb = StringBuilder()
    val negative = s.startsWith("-")
    val digits = if (negative) s.substring(1) else s
    var counter = 0
    for (i in digits.lastIndex downTo 0) {
        sb.append(digits[i])
        counter++
        if (counter % 3 == 0 && i != 0) sb.append(',')
    }
    if (negative) sb.append('-')
    return sb.reverse().toString()
}
