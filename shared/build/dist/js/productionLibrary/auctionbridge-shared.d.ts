type Nullable<T> = T | null | undefined
declare function KtSingleton<T>(): T & (abstract new() => any);
export declare class AuctionBridgeApi {
    private constructor();
    createMainViewModel(): MainViewModelJs;
    createMapViewModel(categoryId: string): MapViewModelJs;
}
/** @deprecated $metadata$ is used for internal purposes, please don't use it in your code, because it can be removed at any moment */
export declare namespace AuctionBridgeApi.$metadata$ {
    const constructor: abstract new () => AuctionBridgeApi;
}
export declare function createAuctionBridge(): AuctionBridgeApi;
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
export declare function prefetchWebUserLocation(): void;