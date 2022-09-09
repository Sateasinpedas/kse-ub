import React from "react";

export default function StyleButton(props) {
    let className = 'RichEditor-styleButton';
    if (props.active) {
        className += ' RichEditor-activeButton';
    }

    const onToggle = (e) => {
        e.preventDefault();
        props.onToggle(props.style);
    }

    return (
        <span className={className} onMouseDown={onToggle} role="presentation">
            {props.label}
        </span>
    );
}