import React from 'react';

const CircleIcon = (props) => {
    const delta = 360 / props.iconsCount,
        top = (150 - 15) - 150 * Math.cos(props.index * delta * Math.PI / 180),
        left = (150 - 15) + 150 * Math.sin(props.index * delta * Math.PI / 180),
        rotate = (360 / props.iconsCount) * props.index;

    const style = {
        position:'absolute',
        top,
        left,
        transition:'transform 0.7s ease-in-out',
        transform: `rotate(${rotate}deg) scale(${props.scale || 1})`
    };

    return <span style={style} className={`fa fa-${props.icon}`}>
        </span>;
};

export default CircleIcon;
