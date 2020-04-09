import React from 'react';
import TheoremLogo from '../media/theoremlogo.png';
import AflacLogo from '../media/aflaclogo.png';
import '../scss/_navbar.scss';

function NavBar(){
  return (
    <div className='navbar'>
      <div className='navbar-theorem'>
        <img className='sidenav-wrap-theorem' src={TheoremLogo} alt="Theorem Advertising Logo"></img>
      </div>
      <div className="navbar-spacer">|</div>
      <div className='navbar-aflac'>
        <img src={AflacLogo} alt="Aflac Logo"></img>
      </div>

      <a href="/user/sign-out" className=' navbar-sign-out'>Sign Out</a>

    </div>
  );
}

export default NavBar;