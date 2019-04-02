import React from 'react';

export default props => (
    <div className="form-group">
        <label>{props.label}</label>
        <input {...props} className="form-control"/>
    </div>
)