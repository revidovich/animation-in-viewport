import React from 'react';
declare type UseInputType = {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function useInput(initialValue: string | number | boolean): UseInputType;
export {};
