import React from 'react';
import './Tool.css';

const Tools = (props) => {
    const {title, description, imageUrl, linkText, linkUrl} = props.tool || {};

    return (
        <div className={`Tool-container Box`}>
            <div className="project">
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
                <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
                </div>
                <a href={linkUrl} target="_blank">{linkText}</a>
            </div>
        </div>
    );
};

export default Tools;
