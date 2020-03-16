// Dependencies for component
import React from 'react';
import AflacDuck from '../media/bc_duck_search.png'

function GridHeading(){
  
  return (
    <div className='aflac-heading'>
      <style>{`
        body {
          margin: 0px;
          padding: 0px;
        }
        .aflac-heading {
            background: #00A5E6;
            height: 100px;
            overflow: hidden;
            margin-bottom: 30px;
        }
        .aflac-heading img {
            width: 280px;
            float: right;
            margin: 10px -100px 0px 0px ;
        }
        
      `}</style>
      <div className='splash-heading'>
        <img src={AflacDuck} alt="Aflac Duck Mascot"></img>
      </div>

    </div>
  );
}

export default GridHeading;