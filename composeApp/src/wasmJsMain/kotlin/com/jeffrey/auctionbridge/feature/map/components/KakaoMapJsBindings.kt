package com.jeffrey.auctionbridge.feature.map.components

import org.w3c.dom.HTMLElement

/**
 * Kakao Maps JS SDK 의 외부 진입점.
 *
 * index.html 의 <script src=".../sdk.js?appkey=...&autoload=false"> 가 로드되어 있어야 한다.
 * Compose 코드에서는 [kakaoMapsLoad] 로 SDK ready 를 기다린 뒤 [createKakaoMap] 등을 호출한다.
 */

/** kakao.maps.load(callback) — JS SDK 가 준비된 뒤 콜백 실행. */
@JsFun(
    """(callback) => {
        if (typeof kakao !== 'undefined' && kakao.maps) {
            kakao.maps.load(callback);
        } else {
            console.warn('[KakaoMap] SDK 가 아직 로드되지 않았습니다 (index.html 의 <script> 태그 확인).');
        }
    }""",
)
external fun kakaoMapsLoad(callback: () -> Unit)

/**
 * 지도 인스턴스를 생성한다. 반환값은 외부 객체로 보관용 (불투명 핸들).
 *
 * @param container #kakao-map div HTMLElement
 * @param lat 초기 중심 위도
 * @param lng 초기 중심 경도
 * @param level 1~14, 작을수록 확대
 */
@JsFun(
    """(container, lat, lng, level) => {
        const center = new kakao.maps.LatLng(lat, lng);
        const map = new kakao.maps.Map(container, { center: center, level: level });
        return map;
    }""",
)
external fun createKakaoMap(container: HTMLElement, lat: Double, lng: Double, level: Int): JsAny

/** 카메라 이동 — kakao.maps.LatLng 객체로 setCenter 호출. */
@JsFun(
    """(map, lat, lng, level) => {
        const target = new kakao.maps.LatLng(lat, lng);
        if (level && level > 0) map.setLevel(level);
        map.panTo(target);
    }""",
)
external fun moveKakaoMap(map: JsAny, lat: Double, lng: Double, level: Int)

/** 단순 CustomOverlay 추가 — 말풍선 HTML 컨텐츠. content는 outer DOM 문자열. */
@JsFun(
    """(map, lat, lng, html) => {
        const overlay = new kakao.maps.CustomOverlay({
            map: map,
            position: new kakao.maps.LatLng(lat, lng),
            content: html,
            yAnchor: 1.0,
            xAnchor: 0.5,
        });
        return overlay;
    }""",
)
external fun addCustomOverlay(map: JsAny, lat: Double, lng: Double, html: String): JsAny

/** CustomOverlay 제거 (지도에서 분리). */
@JsFun("""(overlay) => { overlay.setMap(null); }""")
external fun removeCustomOverlay(overlay: JsAny)

/**
 * 컨테이너 사이즈가 바뀐 뒤 호출 — Kakao Map 내부 캔버스 재계산.
 * 새로고침으로 SDK 가 캐시된 채 0x0 div 위에 map 이 생성된 경우 정상 사이즈로 회복하기 위해 사용.
 */
@JsFun("""(map) => { if (map && typeof map.relayout === 'function') map.relayout(); }""")
external fun relayoutKakaoMap(map: JsAny)
