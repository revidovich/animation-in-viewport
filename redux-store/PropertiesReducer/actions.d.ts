declare type UpdateType = {
    ({ type, payload }: {
        type: string;
        payload: JSON;
    }): void;
};
export declare const UPDATE_PROPERTIES: string;
export declare function updateProperties(): (dispatch: UpdateType) => Promise<void>;
export {};
