import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
export declare function reviewsReducer(state: {
    reviews: import("../../types").reviewData[];
} | undefined, action: PayloadAction): RootState;
