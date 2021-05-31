import { AsyncThunk, PayloadAction } from '@reduxjs/toolkit';
export declare type PayloadType = {
    login: string;
    password: string;
};
declare type LoginStateType = {
    isLoggedIn: boolean;
    profileType: string | null;
    loginName: string | null;
    email: string | null;
    password: string | null;
    loading: boolean;
    error: boolean;
    networkError: boolean;
    statusAuth: boolean | null;
};
export declare type PromisePayloadType = {
    payload?: Promise<{
        token?: string;
    }>;
    ok?: boolean;
    token?: string;
};
export declare const ApiLogIn: AsyncThunk<PromisePayloadType, PayloadType, {}>;
export declare const ApiRefreshToken: AsyncThunk<PromisePayloadType, string, {}>;
export declare const loginSlice: import("@reduxjs/toolkit").Slice<LoginStateType, {
    logIn: (state: import("immer/dist/internal").WritableDraft<LoginStateType>, { payload }: PayloadAction<{
        login: string;
    }>) => void;
    logOut: (state: import("immer/dist/internal").WritableDraft<LoginStateType>) => void;
    refresh: (state: import("immer/dist/internal").WritableDraft<LoginStateType>, { payload }: PayloadAction<{
        login: string;
    }>) => void;
}, "loginState">;
export declare const logIn: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    login: string;
}, string>, logOut: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, refresh: import("@reduxjs/toolkit").ActionCreatorWithPayload<{
    login: string;
}, string>;
export declare const selectIsLoggedIn: (state: any) => boolean;
export declare const selectLoginName: (state: any) => string | null;
export declare const selectLoading: (state: any) => boolean;
export declare const selectStatus: (state: any) => boolean | null;
export declare const selectNetworkError: (state: any) => boolean;
declare const _default: import("redux").Reducer<LoginStateType, import("redux").AnyAction>;
export default _default;
