import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
export declare const UPDATE_REVIEWS: string;
export declare function updateReviews({ profileType, }: {
    profileType: string;
}): ThunkAction<void, RootState, unknown, AnyAction>;
