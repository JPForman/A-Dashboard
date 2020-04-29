import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/_error404.scss'

function Error404({ setSidebarNavDisplay }){
  return (
    <div className='error'>
      {setSidebarNavDisplay('None')}
      <h2 >The page you are looking for does not exist! I suppose you could consider it an existential crisis, although "crisis" seems a bit strong given the circumstances.<span id='jf'>jf</span></h2>
      <h3>Would you like to return <Link to="/">home</Link> ?</h3>
    </div>
  );
}

export default Error404;