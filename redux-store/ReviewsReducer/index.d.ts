import { reviewData } from '../../types';
declare type state = {
    reviews: reviewData[];
};
declare type actionType = {
    type: string;
    payload?: reviewData[];
};
export declare function reviewsReducer(state: {
    reviews: reviewData[];
} | undefined, action: actionType): state;
export {};
