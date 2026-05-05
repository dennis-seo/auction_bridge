package com.jeffrey.auctionbridge.core.domain.model

enum class AuctionCategory(val id: String, val displayName: String) {
    APARTMENT("apartment", "아파트"),
    CAR("car", "자동차"),
    OFFICE_TEL("officetel", "오피스텔"),
    HOUSE("house", "주택"),
    STORE("store", "상가"),
    LAND("land", "토지");

    companion object {
        fun fromId(id: String): AuctionCategory? = entries.firstOrNull { it.id == id }
    }
}
