// Dependencies for component
import React from 'react';
import AflacDuck from '../media/bc_duck_search.png'
import '../scss/_gridHeading.scss'; // assuming a styles directory under src/

function GridHeading(){
  
  return (
    <React.Fragment>
      <div className='splash-heading'>
        <img src={AflacDuck} alt="Aflac Duck Mascot"></img>
      </div>

    </React.Fragment>
  );
}

export default GridHeading;