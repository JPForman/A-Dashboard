import React from 'react';

// For selecting departments
function Card({ title, image, setActiveView }) {
    
    return (
        <div className='card'>
            <img className='card-icon' src={image}></img>
            <h1 className='card-title'>{title}</h1>
        </div>
    );
}

export default Card; 