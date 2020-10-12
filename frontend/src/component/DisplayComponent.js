import React from 'react';

function DisplayComponent(props) {
    return (
        <div>
            <span>{(props.time.m >= 10)? props.time.m : "0"+ props.time.m}</span>
            <span>{(props.time.s >= 10)? props.time.s : "0"+ props.time.s}</span>
        </div>
    );
}

export default DisplayComponent;
