import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
export declare const UPDATE_PROPERTIES: string;
export declare function updateProperties(): ThunkAction<RootState, void, unknown, AnyAction>;
