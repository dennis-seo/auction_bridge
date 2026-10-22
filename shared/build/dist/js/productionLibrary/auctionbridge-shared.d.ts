type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare class AuctionBridgeApi {
    private constructor();
    createMainViewModel(): MainViewModelJs;
    createMapViewModel(categoryId: string): MapViewModelJs;
    createDetailViewModel(itemId: string): DetailViewModelJs;
    createSearchViewModel(categoryId: Nullable<string>, tab: string): SearchViewModelJs;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AuctionBridgeApi.$metadata$ {
    const constructor: abstract new () => AuctionBridgeApi;
}
export declare function createAuctionBridge(): AuctionBridgeApi;
export declare class RealtyDetailsDto {
    private constructor();
    get propertyCategory(): string;
    get landSqms(): Nullable<number>;
    get bldSqms(): Nullable<number>;
    get alcYn(): Nullable<boolean>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace RealtyDetailsDto.$metadata$ {
    const constructor: abstract new () => RealtyDetailsDto;
}
export declare class VehicleDetailsDto {
    private constructor();
    get vehicleCategory(): string;
    get maker(): Nullable<string>;
    get vehicleKind(): Nullable<string>;
    get modelName(): Nullable<string>;
    get yearModel(): Nullable<string>;
    get plateNo(): Nullable<string>;
    get mileageKm(): Nullable<number>;
    get displacementCc(): Nullable<number>;
    get transmission(): Nullable<string>;
    get fuel(): Nullable<string>;
    get color(): Nullable<string>;
    get quantityText(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace VehicleDetailsDto.$metadata$ {
    const constructor: abstract new () => VehicleDetailsDto;
}
export declare class MovableDetailsDto {
    private constructor();
    get maker(): Nullable<string>;
    get modelName(): Nullable<string>;
    get manufactureYear(): Nullable<string>;
    get quantityText(): Nullable<string>;
    get productionPlace(): Nullable<string>;
    get usePeriodYear(): Nullable<number>;
    get sizeText(): Nullable<string>;
    get weightText(): Nullable<string>;
    get custodyPlace(): Nullable<string>;
    get authorName(): Nullable<string>;
    get membershipName(): Nullable<string>;
    get commodityName(): Nullable<string>;
    get productName(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace MovableDetailsDto.$metadata$ {
    const constructor: abstract new () => MovableDetailsDto;
}
export declare class AuctionRoundJsDto {
    private constructor();
    get roundLabel(): Nullable<string>;
    get periodText(): Nullable<string>;
    get status(): Nullable<string>;
    get minBidPrice(): Nullable<number>;
    get minBidText(): Nullable<string>;
    get resultLabel(): Nullable<string>;
    get isCurrent(): boolean;
    get salePrice(): Nullable<number>;
    get saleText(): Nullable<string>;
    get saleRatioText(): Nullable<string>;
    get bidderCount(): Nullable<number>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AuctionRoundJsDto.$metadata$ {
    const constructor: abstract new () => AuctionRoundJsDto;
}
export declare class RightsAnalysisDto {
    private constructor();
    get summary(): Nullable<string>;
    get riskLevel(): Nullable<number>;
    get riskLevelLabel(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace RightsAnalysisDto.$metadata$ {
    const constructor: abstract new () => RightsAnalysisDto;
}
export declare class AuctionDetailDto {
    private constructor();
    get id(): string;
    get source(): string;
    get assetType(): string;
    get assetTypeLabel(): string;
    get status(): string;
    get statusLabel(): string;
    get title(): Nullable<string>;
    get cltrMngNo(): Nullable<string>;
    get caseNumber(): Nullable<string>;
    get courtName(): Nullable<string>;
    get address(): Nullable<string>;
    get regionSido(): Nullable<string>;
    get regionSigungu(): Nullable<string>;
    get regionEmd(): Nullable<string>;
    get latitude(): Nullable<number>;
    get longitude(): Nullable<number>;
    get appraisalPrice(): Nullable<number>;
    get minBidPrice(): Nullable<number>;
    get minBidPriceText(): Nullable<string>;
    get firstBidPrice(): Nullable<number>;
    get apslLowstRatio(): Nullable<number>;
    get frstLowstRatio(): Nullable<number>;
    get feeRate(): Nullable<number>;
    get appraisalText(): Nullable<string>;
    get minBidText(): Nullable<string>;
    get bidBeginAt(): Nullable<string>;
    get bidEndAt(): Nullable<string>;
    get bidBeginDisplay(): Nullable<string>;
    get bidEndDisplay(): Nullable<string>;
    get failedCount(): number;
    get progressCount(): number;
    get pvctTrgtYn(): Nullable<boolean>;
    get pbctStat(): Nullable<string>;
    get prptDiv(): Nullable<string>;
    get dspsMthod(): Nullable<string>;
    get bidDiv(): Nullable<string>;
    get bidMthod(): Nullable<string>;
    get cptnMthod(): Nullable<string>;
    get totalamtUnpcDiv(): Nullable<string>;
    get usgLcls(): Nullable<string>;
    get usgMcls(): Nullable<string>;
    get usgScls(): Nullable<string>;
    get elecGrprUse(): Nullable<boolean>;
    get collbBidPsbl(): Nullable<boolean>;
    get twtmGthrBidPsbl(): Nullable<boolean>;
    get subtBidPsbl(): Nullable<boolean>;
    get requestOrgNm(): Nullable<string>;
    get announceOrgNm(): Nullable<string>;
    get thumbnailUrl(): Nullable<string>;
    get imageUrls(): Array<string>;
    get evcRsbyTarget(): Nullable<string>;
    get realty(): Nullable<RealtyDetailsDto>;
    get vehicle(): Nullable<VehicleDetailsDto>;
    get movable(): Nullable<MovableDetailsDto>;
    get rightsAnalysis(): Nullable<RightsAnalysisDto>;
    get rounds(): Array<AuctionRoundJsDto>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AuctionDetailDto.$metadata$ {
    const constructor: abstract new () => AuctionDetailDto;
}
export declare class DetailUiStateDto {
    private constructor();
    get isLoading(): boolean;
    get detail(): Nullable<AuctionDetailDto>;
    get errorMessage(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace DetailUiStateDto.$metadata$ {
    const constructor: abstract new () => DetailUiStateDto;
}
export declare class DetailViewModelJs {
    private constructor();
    subscribe(onState: (p0: DetailUiStateDto) => void): () => void;
    retry(): void;
    dispose(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace DetailViewModelJs.$metadata$ {
    const constructor: abstract new () => DetailViewModelJs;
}
export declare class CategoryInfoDto {
    private constructor();
    get id(): string;
    get displayName(): string;
    get emoji(): string;
    get ongoingCount(): Nullable<number>;
    get themeColorHex(): string;
    get isEnabled(): boolean;
    get span(): string;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace CategoryInfoDto.$metadata$ {
    const constructor: abstract new () => CategoryInfoDto;
}
export declare class MainUiStateDto {
    private constructor();
    get categories(): Array<CategoryInfoDto>;
    get isLoggedIn(): boolean;
    get userName(): Nullable<string>;
    get transientMessage(): Nullable<string>;
    get errorMessage(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace MainUiStateDto.$metadata$ {
    const constructor: abstract new () => MainUiStateDto;
}
export declare class AuctionItemDto {
    private constructor();
    get id(): string;
    get categoryId(): string;
    get categoryDisplayName(): string;
    get priceText(): string;
    get failedCount(): number;
    get latitude(): number;
    get longitude(): number;
    get address(): string;
    get title(): Nullable<string>;
    get buildingUnitLabel(): Nullable<string>;
    get appraisalText(): Nullable<string>;
    get minBidText(): Nullable<string>;
    get appraisalPrice(): Nullable<number>;
    get minBidPrice(): Nullable<number>;
    get bidEndShort(): Nullable<string>;
    get bidEndAt(): Nullable<string>;
    get markerSubInfo(): Nullable<string>;
    get status(): Nullable<string>;
    get statusLabel(): Nullable<string>;
    get thumbnailUrl(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AuctionItemDto.$metadata$ {
    const constructor: abstract new () => AuctionItemDto;
}
export declare class AuctionClusterDto {
    private constructor();
    get cityKey(): string;
    get centerLat(): number;
    get centerLng(): number;
    get itemCount(): number;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AuctionClusterDto.$metadata$ {
    const constructor: abstract new () => AuctionClusterDto;
}
export declare class MarkerGroupDto {
    private constructor();
    get groupKey(): string;
    get latitude(): number;
    get longitude(): number;
    get count(): number;
    get items(): Array<AuctionItemDto>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace MarkerGroupDto.$metadata$ {
    const constructor: abstract new () => MarkerGroupDto;
}
export declare class MapUiStateDto {
    private constructor();
    get items(): Array<AuctionItemDto>;
    get selectedItem(): Nullable<AuctionItemDto>;
    get centerLat(): number;
    get centerLng(): number;
    get kakaoLevel(): number;
    get isLocationLoading(): boolean;
    get locationFallbackUsed(): boolean;
    get clusters(): Array<AuctionClusterDto>;
    get clusterMode(): boolean;
    get isLoadingItems(): boolean;
    get errorMessage(): Nullable<string>;
    get markerGroups(): Array<MarkerGroupDto>;
    get selectedGroup(): Nullable<MarkerGroupDto>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace MapUiStateDto.$metadata$ {
    const constructor: abstract new () => MapUiStateDto;
}
export declare class MainViewModelJs {
    private constructor();
    subscribe(onState: (p0: MainUiStateDto) => void): () => void;
    toggleLogin(): void;
    onDisabledCategoryClick(displayName: string): void;
    consumeMessage(): void;
    dismissError(): void;
    dispose(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace MainViewModelJs.$metadata$ {
    const constructor: abstract new () => MainViewModelJs;
}
export declare class MapViewModelJs {
    private constructor();
    subscribe(onState: (p0: MapUiStateDto) => void): () => void;
    onMapReady(moveHandler: (p0: number, p1: number, p2: number, p3: boolean) => void): void;
    onMarkerClick(itemId: string): void;
    onGroupClick(groupKey: string): void;
    onMyLocationClick(): void;
    onZoomIn(): void;
    onZoomOut(): void;
    clearSelection(): void;
    dismissError(): void;
    onLocationPermissionGranted(): void;
    onMapZoomChanged(kakaoLevel: number): void;
    onClusterClick(cityKey: string): void;
    dispose(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace MapViewModelJs.$metadata$ {
    const constructor: abstract new () => MapViewModelJs;
}
export declare class SearchItemDto {
    private constructor();
    get id(): string;
    get title(): Nullable<string>;
    get address(): Nullable<string>;
    get propertyCategory(): Nullable<string>;
    get status(): Nullable<string>;
    get statusLabel(): Nullable<string>;
    get appraisalPrice(): Nullable<number>;
    get minBidPrice(): Nullable<number>;
    get appraisalText(): Nullable<string>;
    get minBidText(): Nullable<string>;
    get bidEndAt(): Nullable<string>;
    get ddayLabel(): Nullable<string>;
    get failedCount(): number;
    get thumbnailUrl(): Nullable<string>;
    get areaText(): Nullable<string>;
    get prptDivNm(): Nullable<string>;
    get salePrice(): Nullable<number>;
    get salePriceRatio(): Nullable<number>;
    get saleRatioText(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace SearchItemDto.$metadata$ {
    const constructor: abstract new () => SearchItemDto;
}
export declare class SearchFilterDto {
    private constructor();
    get regionSido(): Nullable<string>;
    get regionSigungu(): Nullable<string>;
    get categoryIds(): Array<string>;
    get minPrice(): Nullable<number>;
    get maxPrice(): Nullable<number>;
    get minFailedCount(): Nullable<number>;
    get maxFailedCount(): Nullable<number>;
    get minAreaSqm(): Nullable<number>;
    get maxAreaSqm(): Nullable<number>;
    get activeCount(): number;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace SearchFilterDto.$metadata$ {
    const constructor: abstract new () => SearchFilterDto;
}
export declare class SearchUiStateDto {
    private constructor();
    get tabId(): string;
    get filter(): SearchFilterDto;
    get sortId(): string;
    get sortLabel(): string;
    get items(): Array<SearchItemDto>;
    get total(): number;
    get hasMore(): boolean;
    get isLoading(): boolean;
    get isLoadingMore(): boolean;
    get isFilterSheetOpen(): boolean;
    get errorMessage(): Nullable<string>;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace SearchUiStateDto.$metadata$ {
    const constructor: abstract new () => SearchUiStateDto;
}
export declare class SearchViewModelJs {
    private constructor();
    subscribe(onState: (p0: SearchUiStateDto) => void): () => void;
    applyFilter(regionSido: Nullable<string>, regionSigungu: Nullable<string>, categoryIds: Array<string>, minPrice: Nullable<number>, maxPrice: Nullable<number>, minFailedCount: Nullable<number>, maxFailedCount: Nullable<number>, minAreaSqm: Nullable<number>, maxAreaSqm: Nullable<number>): void;
    clearFilter(): void;
    setSort(sortId: string): void;
    selectTab(tabId: string): void;
    loadNextPage(): void;
    refresh(): void;
    openFilterSheet(): void;
    closeFilterSheet(): void;
    dismissError(): void;
    dispose(): void;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace SearchViewModelJs.$metadata$ {
    const constructor: abstract new () => SearchViewModelJs;
}
export declare function prefetchWebUserLocation(): void;