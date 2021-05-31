import React from 'react';
declare const PrivateRoute: React.FC<{
    component: React.FC | React.FC<unknown>;
    path: string;
    exact: boolean;
}>;
export default PrivateRoute;
