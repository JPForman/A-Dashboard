import React from 'react';

// For selecting departments
function Card({ data, image, setActiveView }) {
    
    function changeView(entry){
        setActiveView(entry);
    }
    
    return (
        <div onClick={()=>{changeView(data.header)}} className='card'>
            <img className='card-icon' src={image}></img>
            <h1 className='card-title'>{data.header}</h1>
        </div>
    );
}

export default Card; 