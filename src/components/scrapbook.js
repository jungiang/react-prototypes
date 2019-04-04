import React from 'react';
import './scrapbook.css';
import ImageData from './image_data';
import ScrapbookImage from './scrapbook_image';

export default props => {
    const images = ImageData.map((item, index)=>{
        return <ScrapbookImage about={item} key={index}/>
    })
    return (
        <div className="scrapbook-container">
            {images}
        </div>
    )
}