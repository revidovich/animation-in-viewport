import type { RootState } from '../store';
declare type LoginState = {
    isLoggedIn: boolean;
    loginName: string | null;
};
export declare const loginSlice: import("@reduxjs/toolkit").Slice<LoginState, {
    logIn: (state: import("immer/dist/internal").WritableDraft<LoginState>) => void;
    logOut: (state: import("immer/dist/internal").WritableDraft<LoginState>) => void;
    setLoginName: (state: import("immer/dist/internal").WritableDraft<LoginState>, action: {
        payload: any;
        type: string;
    }) => void;
}, "loginState">;
export declare const logIn: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, logOut: import("@reduxjs/toolkit").ActionCreatorWithoutPayload<string>, setLoginName: import("@reduxjs/toolkit").ActionCreatorWithPayload<any, string>;
export declare const selectIsLoggedIn: (state: RootState) => boolean;
export declare const selectLoginName: (state: RootState) => string | null;
declare const _default: import("redux").Reducer<LoginState, import("redux").AnyAction>;
export default _default;
