import React from 'react';

export default props => {
    const {src, style} = props.about;
    return(
        <img src={src} style={style} className="scrapbook-image" alt=""/>
    )
}