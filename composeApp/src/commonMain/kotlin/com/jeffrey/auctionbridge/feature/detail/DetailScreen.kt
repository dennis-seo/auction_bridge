package com.jeffrey.auctionbridge.feature.detail

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.CircularProgressIndicator
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.lifecycle.compose.collectAsStateWithLifecycle
import com.jeffrey.auctionbridge.core.domain.model.AuctionAssetDetails
import com.jeffrey.auctionbridge.core.domain.model.AuctionDetail
import com.jeffrey.auctionbridge.core.domain.model.AuctionRound
import com.jeffrey.auctionbridge.core.domain.model.RightsAnalysisSummary
import org.koin.compose.viewmodel.koinViewModel
import org.koin.core.parameter.parametersOf

@OptIn(ExperimentalMaterial3Api::class)
@Composable
fun DetailScreen(
    itemId: String,
    onBack: () -> Unit,
    viewModel: DetailViewModel = koinViewModel { parametersOf(itemId) },
) {
    val uiState by viewModel.uiState.collectAsStateWithLifecycle()

    Scaffold(
        topBar = {
            TopAppBar(
                title = { Text("매물 상세") },
                navigationIcon = {
                    IconButton(onClick = onBack) {
                        Text(text = "←", fontWeight = FontWeight.Bold, fontSize = 22.sp)
                    }
                },
            )
        },
    ) { padding ->
        Box(
            modifier = Modifier.padding(padding).fillMaxSize(),
            contentAlignment = Alignment.Center,
        ) {
            when (val state = uiState) {
                is DetailUiState.Loading -> CircularProgressIndicator()
                is DetailUiState.Error -> ErrorContent(
                    message = state.message,
                    onRetry = viewModel::retry,
                )
                is DetailUiState.Loaded -> LoadedContent(detail = state.detail)
            }
        }
    }
}

@Composable
private fun ErrorContent(message: String, onRetry: () -> Unit) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        Text(text = message, color = MaterialTheme.colorScheme.error)
        Button(onClick = onRetry) { Text("다시 시도") }
    }
}

@Composable
private fun LoadedContent(detail: AuctionDetail) {
    Column(
        modifier = Modifier
            .fillMaxSize()
            .verticalScroll(rememberScrollState())
            .padding(16.dp),
        verticalArrangement = Arrangement.spacedBy(12.dp),
    ) {
        HeaderCard(detail)
        PriceCard(detail)
        ScheduleCard(detail)
        if (detail.rounds.isNotEmpty()) RoundsCard(detail.rounds)
        detail.details?.let { AssetDetailsCard(it) }
        detail.rightsAnalysis?.let { RightsAnalysisCard(it) }
    }
}

@Composable
private fun SectionCard(title: String, content: @Composable () -> Unit) {
    Surface(
        shape = RoundedCornerShape(16.dp),
        color = MaterialTheme.colorScheme.surface,
        shadowElevation = 4.dp,
        modifier = Modifier.fillMaxWidth(),
    ) {
        Column(modifier = Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            Text(
                text = title,
                fontWeight = FontWeight.Bold,
                fontSize = 16.sp,
                color = MaterialTheme.colorScheme.primary,
            )
            content()
        }
    }
}

@Composable
private fun KeyValue(key: String, value: String?) {
    if (value.isNullOrBlank()) return
    Row(modifier = Modifier.fillMaxWidth()) {
        Text(
            text = key,
            color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
            fontSize = 13.sp,
            modifier = Modifier.weight(0.4f),
        )
        Text(
            text = value,
            color = MaterialTheme.colorScheme.onSurface,
            fontSize = 14.sp,
            fontWeight = FontWeight.Medium,
            modifier = Modifier.weight(0.6f),
        )
    }
}

@Composable
private fun HeaderCard(detail: AuctionDetail) {
    SectionCard(title = detail.assetTypeLabel()) {
        detail.codeNames.prptDiv?.takeIf { it.isNotBlank() }?.let { prptDiv ->
            Surface(
                shape = RoundedCornerShape(999.dp),
                color = MaterialTheme.colorScheme.secondaryContainer,
            ) {
                Text(
                    text = prptDiv,
                    fontSize = 12.sp,
                    fontWeight = FontWeight.Medium,
                    color = MaterialTheme.colorScheme.onSecondaryContainer,
                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 3.dp),
                )
            }
        }
        Text(
            text = detail.title ?: detail.address ?: "(제목 없음)",
            fontSize = 18.sp,
            fontWeight = FontWeight.SemiBold,
            color = MaterialTheme.colorScheme.onSurface,
        )
        Spacer(Modifier.height(4.dp))
        KeyValue("상태", detail.statusLabel())
        KeyValue("주소", detail.address)
        KeyValue("관리번호", detail.cltrMngNo)
        KeyValue("의뢰기관", detail.requestOrgNm)
    }
}

@Composable
private fun PriceCard(detail: AuctionDetail) {
    SectionCard(title = "가격") {
        KeyValue("감정가", detail.appraisalText())
        KeyValue("최저가", detail.minBidText())
        detail.apslLowstRatio?.let { KeyValue("최저/감정 비율", "${it.format1()}%") }
        detail.frstLowstRatio?.let { KeyValue("최저/최초 비율", "${it.format1()}%") }
        detail.feeRate?.let { KeyValue("수수료율", "${it.format1()}%") }
    }
}

@Composable
private fun ScheduleCard(detail: AuctionDetail) {
    SectionCard(title = "일정") {
        KeyValue("입찰 시작", detail.bidBeginDisplay())
        KeyValue("입찰 마감", detail.bidEndDisplay())
        if (detail.failedCount > 0) KeyValue("유찰 횟수", "${detail.failedCount}회")
        if (detail.progressCount > 0) KeyValue("진행 회차", "${detail.progressCount}회")
    }
}

@Composable
private fun RoundsCard(rounds: List<AuctionRound>) {
    SectionCard(title = "회차 이력") {
        rounds.forEach { round -> RoundRow(round) }
    }
}

@Composable
private fun RoundRow(round: AuctionRound) {
    val background =
        if (round.isCurrent) MaterialTheme.colorScheme.primary.copy(alpha = 0.08f)
        else Color.Transparent
    Column(
        modifier = Modifier
            .fillMaxWidth()
            .background(background, RoundedCornerShape(10.dp))
            .padding(horizontal = 10.dp, vertical = 8.dp),
        verticalArrangement = Arrangement.spacedBy(2.dp),
    ) {
        Row(
            modifier = Modifier.fillMaxWidth(),
            verticalAlignment = Alignment.CenterVertically,
        ) {
            Text(
                text = round.roundLabelDisplay() ?: "—",
                fontSize = 14.sp,
                fontWeight = FontWeight.SemiBold,
                color = MaterialTheme.colorScheme.onSurface,
            )
            if (round.isCurrent) {
                Spacer(Modifier.width(6.dp))
                Text(
                    text = "현재",
                    fontSize = 11.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = MaterialTheme.colorScheme.primary,
                )
            }
            Spacer(Modifier.weight(1f))
            RoundStatusBadge(round)
        }
        Row(modifier = Modifier.fillMaxWidth()) {
            Text(
                text = round.periodText() ?: "—",
                fontSize = 13.sp,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f),
                modifier = Modifier.weight(1f),
            )
            Text(
                text = round.minBidText() ?: "—",
                fontSize = 13.sp,
                fontWeight = FontWeight.Medium,
                color = MaterialTheme.colorScheme.onSurface,
            )
        }
        val saleInfo = listOfNotNull(
            round.saleText()?.let { "낙찰가 $it" },
            round.saleRatioText(),
            round.result?.validBidderCount?.takeIf { it > 0 }?.let { "응찰 ${it}명" },
        ).joinToString(" · ")
        if (saleInfo.isNotEmpty()) {
            Text(
                text = saleInfo,
                fontSize = 12.sp,
                fontWeight = FontWeight.Medium,
                color = Color(0xFF2E7D32),
            )
        }
    }
}

@Composable
private fun RoundStatusBadge(round: AuctionRound) {
    val label = round.resultLabel() ?: return
    val color = when (round.status?.lowercase()) {
        "sold" -> Color(0xFF2E7D32)
        "failed" -> Color(0xFFC62828)
        "ongoing" -> MaterialTheme.colorScheme.primary
        else -> MaterialTheme.colorScheme.onSurface.copy(alpha = 0.6f)
    }
    Surface(shape = RoundedCornerShape(999.dp), color = color.copy(alpha = 0.12f)) {
        Text(
            text = label,
            fontSize = 12.sp,
            fontWeight = FontWeight.SemiBold,
            color = color,
            modifier = Modifier.padding(horizontal = 8.dp, vertical = 2.dp),
        )
    }
}

@Composable
private fun AssetDetailsCard(details: AuctionAssetDetails) {
    when (details) {
        is AuctionAssetDetails.Realty -> SectionCard(title = "부동산 상세") {
            KeyValue("유형", details.propertyCategory)
            details.landSqms?.let { KeyValue("토지 면적", "${it}㎡") }
            details.bldSqms?.let { KeyValue("건물 면적", "${it}㎡") }
            details.alcYn?.let { KeyValue("위반건축물", if (it) "있음" else "없음") }
        }
        is AuctionAssetDetails.Vehicle -> SectionCard(title = "차량 상세") {
            KeyValue("차종", details.vehicleCategory)
            KeyValue("제조사", details.maker)
            KeyValue("모델", details.modelName)
            KeyValue("연식", details.yearModel)
            KeyValue("번호판", details.plateNo)
            details.mileageKm?.let { KeyValue("주행거리", "${it} km") }
            details.displacementCc?.let { KeyValue("배기량", "${it} cc") }
            KeyValue("변속기", details.transmission)
            KeyValue("연료", details.fuel)
            KeyValue("색상", details.color)
        }
        is AuctionAssetDetails.Movable -> SectionCard(title = "동산 상세") {
            KeyValue("제조사", details.maker)
            KeyValue("모델", details.modelName)
            KeyValue("제조년도", details.manufactureYear)
            KeyValue("수량", details.quantityText)
            KeyValue("원산지", details.productionPlace)
            KeyValue("보관장소", details.custodyPlace)
            KeyValue("작가", details.authorName)
            KeyValue("회원권명", details.membershipName)
            KeyValue("품명", details.commodityName ?: details.productName)
        }
    }
}

@Composable
private fun RightsAnalysisCard(analysis: RightsAnalysisSummary) {
    SectionCard(title = "권리분석") {
        riskLevelLabel(analysis.riskLevel)?.let { KeyValue("위험도", it) }
        analysis.summary?.let {
            Text(
                text = it,
                fontSize = 14.sp,
                color = MaterialTheme.colorScheme.onSurface.copy(alpha = 0.85f),
            )
        }
    }
}

private fun Double.format1(): String {
    val rounded = (this * 10).toLong() / 10.0
    return rounded.toString()
}
