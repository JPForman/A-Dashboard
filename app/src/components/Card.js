import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_card.scss';

// For selecting departments
function Card({ title, image, link }) {

  return (
    <div className='card'>
      <Link to={link} className='link'>
        <div className="card-details">
          <img className='card-details-icon' src={image}></img>
          <h1 className='card-details-title'>{title}</h1>
        </div>
      </Link>
    </div>
  );
}

export default Card; 