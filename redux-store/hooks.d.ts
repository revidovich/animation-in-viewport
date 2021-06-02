import { TypedUseSelectorHook } from 'react-redux';
import type { RootState } from './store';
export declare const useAppDispatch: () => import("redux-thunk").ThunkDispatch<{
    loginState: {
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
    registerState: {
        isLoggedIn: boolean;
        name: string | null;
        email: string | null;
        password: string | null;
        loading: boolean;
        error: boolean;
        statusAuth: number | null;
    };
    reviews: {
        reviews: import("../types").reviewData[];
    };
    properties: {
        properties: import("../types").HouseData[];
    };
}, null, import("redux").AnyAction> & import("redux-thunk").ThunkDispatch<{
    loginState: {
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
    registerState: {
        isLoggedIn: boolean;
        name: string | null;
        email: string | null;
        password: string | null;
        loading: boolean;
        error: boolean;
        statusAuth: number | null;
    };
    reviews: {
        reviews: import("../types").reviewData[];
    };
    properties: {
        properties: import("../types").HouseData[];
    };
}, undefined, import("redux").AnyAction> & import("redux").Dispatch<import("redux").AnyAction>;
export declare const useAppSelector: TypedUseSelectorHook<RootState>;
