import { HouseData } from '../../types';
declare type state = {
    properties: HouseData[];
};
declare type actionType = {
    type: string;
    payload?: HouseData[];
};
export declare function propertiesReducer(state: {
    properties: HouseData[];
} | undefined, action: actionType): state;
export {};
