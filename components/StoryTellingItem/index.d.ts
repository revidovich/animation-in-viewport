import React, { ReactNode } from 'react';
import './index.css';
declare type StoryTellingProps = {
    id: number;
    header: string;
    paragraph: string;
    children: ReactNode;
};
declare const StoryTellingItem: React.FunctionComponent<StoryTellingProps>;
export default StoryTellingItem;
