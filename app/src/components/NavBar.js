import React from 'react';
import TheoremLogo from '../media/theoremlogo.png';
import AflacLogo from '../media/aflaclogo.png';

function NavBar(){
  return (
    <div className='navbar'>
      <style>{`
        body {
          margin: 0px;
          padding: 0px; }
        
        .navbar {
          color: #fff;
          width: 100%;
          overflow: hidden;
          height: 50px; }
          .navbar-theorem {
            height: 50px;
            width: 15vw;
            float: left; }
            .navbar-theorem img {
              height: 100%;
              display: block;
              margin: 0px auto; }
          .navbar-spacer {
            float: left;
            color: #333;
            font-size: 45px;
            height: 50px; }
          .navbar-aflac {
            height: 50px;
            width: 15vw;
            float: left; }
            .navbar-aflac img {
              height: 70%;
              display: block;
              margin: 8px auto; }
          .navbar-sign-out {
            background: #00A5E6;
            color: #fff;
            padding: 18px;
            float: right;
            font-family: sans-serif;
            text-decoration: none;
            font-weight: bold;
            height: 100%; }
            .navbar-sign-out:hover {
              text-decoration: underline; }           
      `}</style>

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