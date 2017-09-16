import React from 'react';
import {describeSlice} from '../../utils/arc';

const path = (degrees = 90, radius = 130) => {
    return describeSlice(0, 0, radius, 0, degrees) + 'Z';
};

export const Arc = (props) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
    <g transform="translate(150,150)" stroke="#000" strokeWidth="0">
        <path d={path(props.degrees, props.radius)} fill="#fff"/>
    </g>

</svg>;

export default Arc;
