import React from 'react';
import '../scss/_card.scss';

// For selecting departments
function Card({ title, image }) {

  return (
    <div className='card'>
      <div className="card-details">
        <img className='card-details-icon' src={image}></img>
        <h1 className='card-details-title'>{title}</h1>
      </div>
    </div>
  );
}

export default Card; 