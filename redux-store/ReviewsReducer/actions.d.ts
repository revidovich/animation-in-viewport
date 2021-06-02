export declare const UPDATE_REVIEWS: string;
declare type UpdateReviewsType = {
    ({ type, payload }: {
        type: string;
        payload: JSON;
    }): void;
};
export declare function updateReviews({ profileType, }: {
    profileType: string;
}): (dispatch: UpdateReviewsType) => Promise<void>;
export {};
