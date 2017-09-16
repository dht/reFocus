import React from 'react';
import './ActionBox.css';

import Button from '../Button/Button';

const ActionBox = (props) => <div className={`ActionBox-container Box`}>
    <Button icon={props.icon} gray={true} big={true} label={props.title}
            onClick={props.onClick}/>
</div>;

export default ActionBox;
