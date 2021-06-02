export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
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
}, import("redux").AnyAction, [import("redux-thunk").ThunkMiddleware<{
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
}, import("redux").AnyAction, null> | import("redux-thunk").ThunkMiddleware<{
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
}, import("redux").AnyAction, undefined>]>;
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;
