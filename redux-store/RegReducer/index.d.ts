import { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
declare type RegStateType = {
    isLoggedIn: boolean;
    name: string | null;
    email: string | null;
    password: string | null;
    loading: boolean;
    error: boolean;
    statusAuth: null | number;
};
export declare type postRegType = {
    email: string;
    password: string;
    name: string | null;
};
export declare const postRegister: AsyncThunk<Response, postRegType, {}>;
export declare const registerSlice: import("@reduxjs/toolkit").Slice<RegStateType, {
    doRegister: (state: import("immer/dist/internal").WritableDraft<RegStateType>, action: PayloadAction<string | null>) => void;
}, "registerState">;
export declare const doRegister: import("@reduxjs/toolkit").ActionCreatorWithPayload<string | null, string>;
export declare const selectIsLoggedIn: (state: RootState) => boolean;
export declare const selectRegName: (state: RootState) => string | null;
export declare const selectRegLoading: (state: RootState) => boolean;
export declare const selectRegStatus: (state: RootState) => number | null;
export declare const selectRegError: (state: RootState) => boolean;
declare const _default: import("redux").Reducer<RegStateType, import("redux").AnyAction>;
export default _default;
