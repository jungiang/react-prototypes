import React from 'react';

export default props => {
    console.log(props.info);
    const {info} = props;
    return (
        <div>
            <img src={info['im:image'][2].label} alt=""/>
            <h3>{info['im:name'].label}</h3>
            <p>{info.summary.label}</p>
        </div>
    )
}