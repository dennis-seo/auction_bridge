package com.jeffrey.auctionbridge.feature.search.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.FilterChip
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.ModalBottomSheet
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Text
import androidx.compose.material3.rememberModalBottomSheetState
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.jeffrey.auctionbridge.core.domain.model.AuctionCategory
import com.jeffrey.auctionbridge.feature.search.SearchFilter

/**
 * 검색 필터 바텀시트 — draft 로컬 상태를 편집한 뒤 [적용] 시에만 ViewModel 에 반영.
 *
 * [초기화] 는 draft 와 실제 필터를 모두 비운다(ViewModel.clearFilter — 즉시 재조회).
 * 매각결과 탭에서는 서버가 지역/용도만 지원하지만, 필터 자체는 공용으로 편집 가능
 * (미지원 필드는 repository 가 무시).
 */
@OptIn(ExperimentalMaterial3Api::class, ExperimentalLayoutApi::class)
@Composable
internal fun FilterBottomSheet(
    initialFilter: SearchFilter,
    onApply: (SearchFilter) -> Unit,
    onReset: () -> Unit,
    onDismiss: () -> Unit,
) {
    val sheetState = rememberModalBottomSheetState(skipPartiallyExpanded = true)
    var draft by remember { mutableStateOf(initialFilter) }

    ModalBottomSheet(
        onDismissRequest = onDismiss,
        sheetState = sheetState,
        containerColor = MaterialTheme.colorScheme.surface,
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .verticalScroll(rememberScrollState())
                .padding(horizontal = 20.dp)
                .padding(bottom = 24.dp),
            verticalArrangement = Arrangement.spacedBy(18.dp),
        ) {
            Text(
                text = "필터",
                fontSize = 18.sp,
                fontWeight = FontWeight.Bold,
                color = MaterialTheme.colorScheme.onSurface,
            )

            FilterSection(title = "지역") {
                SelectChip(
                    label = "전체",
                    selected = draft.regionSido == null,
                    onClick = { draft = draft.copy(regionSido = null, regionSigungu = null) },
                )
                SIDO_OPTIONS.forEach { (value, label) ->
                    SelectChip(
                        label = label,
                        selected = draft.regionSido == value,
                        onClick = { draft = draft.copy(regionSido = value, regionSigungu = null) },
                    )
                }
            }

            FilterSection(title = "용도") {
                AuctionCategory.entries
                    .filter { it != AuctionCategory.CAR }
                    .forEach { category ->
                        val selected = category in draft.categories
                        SelectChip(
                            label = category.displayName,
                            selected = selected,
                            onClick = {
                                draft = draft.copy(
                                    categories = if (selected) {
                                        draft.categories - category
                                    } else {
                                        draft.categories + category
                                    },
                                )
                            },
                        )
                    }
            }

            FilterSection(title = "최저 입찰가") {
                PRICE_PRESETS.forEach { preset ->
                    SelectChip(
                        label = preset.label,
                        selected = draft.minPrice == preset.min && draft.maxPrice == preset.max,
                        onClick = { draft = draft.copy(minPrice = preset.min, maxPrice = preset.max) },
                    )
                }
            }

            FilterSection(title = "유찰 횟수") {
                FAILED_COUNT_PRESETS.forEach { preset ->
                    SelectChip(
                        label = preset.label,
                        selected = draft.minFailedCount == preset.min &&
                            draft.maxFailedCount == preset.max,
                        onClick = {
                            draft = draft.copy(
                                minFailedCount = preset.min,
                                maxFailedCount = preset.max,
                            )
                        },
                    )
                }
            }

            FilterSection(title = "전용 면적") {
                AREA_PRESETS.forEach { preset ->
                    SelectChip(
                        label = preset.label,
                        selected = draft.minAreaSqm == preset.min && draft.maxAreaSqm == preset.max,
                        onClick = {
                            draft = draft.copy(minAreaSqm = preset.min, maxAreaSqm = preset.max)
                        },
                    )
                }
            }

            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.spacedBy(12.dp),
            ) {
                OutlinedButton(
                    onClick = {
                        draft = SearchFilter()
                        onReset()
                    },
                    modifier = Modifier.weight(0.35f).height(48.dp),
                ) {
                    Text("초기화")
                }
                Button(
                    onClick = { onApply(draft) },
                    modifier = Modifier.weight(0.65f).height(48.dp),
                ) {
                    Text("적용", fontWeight = FontWeight.SemiBold)
                }
            }
        }
    }
}

@OptIn(ExperimentalLayoutApi::class)
@Composable
private fun FilterSection(
    title: String,
    content: @Composable () -> Unit,
) {
    Column {
        Text(
            text = title,
            fontSize = 13.sp,
            fontWeight = FontWeight.SemiBold,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.7f),
        )
        Spacer(Modifier.height(8.dp))
        FlowRow(
            horizontalArrangement = Arrangement.spacedBy(8.dp),
        ) {
            content()
        }
    }
}

@Composable
private fun SelectChip(
    label: String,
    selected: Boolean,
    onClick: () -> Unit,
) {
    FilterChip(
        selected = selected,
        onClick = onClick,
        label = { Text(label) },
    )
}

/** 시/도 17개 — 값은 서버 region_sido(정확 일치, 온비드 lctnSdnm 공식 명칭), 라벨은 축약 표기. */
private val SIDO_OPTIONS: List<Pair<String, String>> = listOf(
    "서울특별시" to "서울",
    "부산광역시" to "부산",
    "대구광역시" to "대구",
    "인천광역시" to "인천",
    "광주광역시" to "광주",
    "대전광역시" to "대전",
    "울산광역시" to "울산",
    "세종특별자치시" to "세종",
    "경기도" to "경기",
    "강원특별자치도" to "강원",
    "충청북도" to "충북",
    "충청남도" to "충남",
    "전북특별자치도" to "전북",
    "전라남도" to "전남",
    "경상북도" to "경북",
    "경상남도" to "경남",
    "제주특별자치도" to "제주",
)

private data class PricePreset(val label: String, val min: Long?, val max: Long?)

private val PRICE_PRESETS = listOf(
    PricePreset("전체", null, null),
    PricePreset("1억 이하", null, 100_000_000L),
    PricePreset("1~3억", 100_000_000L, 300_000_000L),
    PricePreset("3~5억", 300_000_000L, 500_000_000L),
    PricePreset("5~10억", 500_000_000L, 1_000_000_000L),
    PricePreset("10억 이상", 1_000_000_000L, null),
)

private data class FailedCountPreset(val label: String, val min: Int?, val max: Int?)

private val FAILED_COUNT_PRESETS = listOf(
    FailedCountPreset("전체", null, null),
    FailedCountPreset("0회", 0, 0),
    FailedCountPreset("1회 이상", 1, null),
    FailedCountPreset("2회 이상", 2, null),
    FailedCountPreset("3회 이상", 3, null),
)

private data class AreaPreset(val label: String, val min: Double?, val max: Double?)

private val AREA_PRESETS = listOf(
    AreaPreset("전체", null, null),
    AreaPreset("60㎡ 이하", null, 60.0),
    AreaPreset("60~85㎡", 60.0, 85.0),
    AreaPreset("85~135㎡", 85.0, 135.0),
    AreaPreset("135㎡ 이상", 135.0, null),
)
