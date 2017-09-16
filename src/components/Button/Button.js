import React from 'react';
import './Button.css';

export default class Button extends React.Component {

    constructor(props) {
        super(props);

        this.className = this.className.bind(this);
    }

    renderIcon(icon) {
        if (icon) {
            return <span className={`icon fa fa-${icon}`}>&nbsp;</span>;
        }
    }

    className() {
        let output = ['Button-container'];

        const {secondary, danger, disabled, gray, big} = this.props || {};

        if (disabled) {
            output.push('disabled');
        }

        if (secondary) {
            output.push('secondary');
        }

        if (danger) {
            output.push('danger');
        }

        if (gray) {
            output.push('gray');
        }

        if (big) {
            output.push('big');
        }

        return output.join(' ');
    }

    render() {
        const {label, icon, disabled, style} = this.props;

        return (
            <button className={this.className()}
                    style={style}
                    onClick={this.props.onClick}
                    disabled={disabled}>
                {this.renderIcon(icon)}
                <span>{label}</span>
            </button>
        );
    }
}
