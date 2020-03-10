import React from 'react';
import TheoremLogo from '../media/theoremlogo.png';
import AflacLogo from '../media/aflaclogo.png';
// import LoginAuth from './LoginAuth.jsx';

function LoginPage({ setLoginStatus, loginStatus }) {

  let _username = null;
  let _password = null;
  
  //ReactDOM.render(<LoginAuth />, document.getElementById('root'));

  function handleLogin(event) {
    event.preventDefault();

    // Development login credentials
    const admin = 'admin';
    const adminPassWord = '1';

    (_password.value === adminPassWord && _username.value === admin) ? setLoginStatus(true) : setLoginStatus(false);
    _username.value = '';
    _password.value = '';
  }

  return (
    <div>
      <div className='container'>
        <div className='loginCard'>
          <form onSubmit={handleLogin}>
            <div className='header'>Please log in to continue...</div>
            <div className='inputFields form-group'>
              <input
                type='text'
                id='username'
                placeholder='username'
                required=""
                className='form-control'
                ref={(input) => { _username = input; }} />
              <input
                type='password'
                id='password'
                placeholder='password'
                required=""
                className='form-control'
                ref={(input) => { _password = input; }} />
              <div className='buttonWrapper'>
                <button className="loginButton  btn btn-submit" type='submit'>Login</button>
              </div>
            </div>
          </form>
        </div>
        <p className='loginIssue'>Having trouble logging in? Please reach out ot the team at Theorem and we'll assist you further.</p>
        <img src={TheoremLogo} alt='Theorem Advertising Logo' className='theoremPicture' />
        <img src={AflacLogo} alt='Aflac Advertising Logo' className='aflacPicture' />
      </div>
      <style>
        {`
        .container{
          align-items: center;
          display: flex;
          flex-direction: column;
          font-family: 'Montserrat', sans-serif;
       
        }
        .loginIssue{
          font-size: 14px;
          font-style: italic;
          color: #A0A0A0;
        }
        .theoremPicture{
          justify-content: center;
          max-width: 120px; 
        }
        .aflacPicture{
          justify-content: center;
          max-width: 120px; 
        }
        .loginCard {
          align-content: center;
          border-color: #00A5E6;
          border-style: solid;
          border-width: 1px;
          display: flex;
          height: 325px;
          width: 280px;
          justify-content: center;
          margin: 20px;
          overflow: hidden;
          position: relative;
        }
        .inputFields{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 60px;
          padding: 10px;
          position: relative; 
          top: 65px;
        }
        .inputFields input {
          margin: 5px;
        }
        .inputFields div {
          justify
        }
        .header{
          align-items: center;
          background-color: #00A5E6;
          color: white;
          display: flex;
          height: 100px;  
          justify-content: center;
          left: 0px;
          padding: 15%;
          position: absolute; 
          top: 0px;
          width: 100%;
          font-size: 24px;
        }
        .loginButton{
          background-color: rgba(248,140,0,1);
          color: white;
          display: block;
          align-items: center;
          justify-content: center;
          padding: 10px;
          width: 75px;
          position: absolute; 
        }
        .buttonWrapper{
          display: flex;
          align-content: center;
          justify-content: center;
          margin: 5px;
        }
      `}
      </style>
    </div>
  );
}

export default LoginPage;