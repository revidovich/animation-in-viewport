export declare type SitemapItem = {
    id: number;
    name: string;
    link: string;
};
export declare type reviewData = {
    pk: number;
    title: string;
    description: string;
    rating: number;
    reviewer: string;
    review_on: string;
};
export interface ReviewsList {
    reviews: reviewData[];
}
export declare type reviewsGetData = {
    items_count: number;
    next: null;
    previous: null;
    page_number: number;
    results: reviewData[];
};
export interface HouseData {
    pk: number;
    name: string;
    address: string;
    city: string;
    building_type: string;
    overall_floors: number;
    floor: number;
    decoration: boolean;
    overall_square: number;
    living_square: number;
    kitchen_square: number;
    view: string;
    balcony: boolean;
    images?: string[];
}
export declare type NilHouseData = {
    properties: HouseData[];
};
