import '../App.css';
import '../Login.css';
import React, { useState } from 'react';

function Login() {

  const sinRotar = "btn-rot";
  const sinRotarCard = "flip-cards";

  const [isRotar, setRotando] = useState(sinRotar);
  const [isCardRotar, setCardRotando] = useState(sinRotarCard);
  
  
  const handleClick = () => {
    if (isRotar === 'btn-rot btn-rotar') {
      setRotando(sinRotar);
      setCardRotando(sinRotarCard);
    }else{
      setRotando("btn-rot btn-rotar");
      setCardRotando("flip-cards fliped-cards");
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('🙈 Estamos trabajando en ello. ');
  };

  return (
    <div className="body">
      <div className='cont-login'>
        <div className='options'>
          <div className='options-title'>
            <h5 onClick={handleClick}>Log In</h5>
            <h5 onClick={handleClick}>Sign Up</h5>
          </div>
          <div className='btn-option'>
            <div className='btn-dash'></div>
            <button className={isRotar} onClick={handleClick}>
              <span className="material-symbols-outlined">
                north_east
              </span>
            </button>
          </div>
        </div>
        
        <div className='cont-cards'>
          <div className={ isCardRotar }>

          
            <div className='login fondo-cont tam-cont'>
              <h2>Log In</h2>
              <form onSubmit={handleSubmit}>
                <div className='cont-input'>
                  <div>
                    <span className="material-symbols-outlined">
                      alternate_email
                    </span>
                  </div>
                  <input type="email" placeholder='Email' />
                </div>
                <div className='cont-input'>
                  <div>
                    <span className="material-symbols-outlined">
                      lock
                    </span>
                  </div>
                  <input type="password" placeholder='Password' />
                </div>
                <button type="submit">Login</button>
              </form>
              <p href='#' className='link-pass'>Forgot your password?</p>
            </div>

            <div className='cont-signup fondo-cont tam-cont'>
              <h2>Sign Up</h2>
              <form id='frmRegistrar' onSubmit={handleSubmit}>
                <div className='cont-input'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffbf00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <input type="text" placeholder='Full Name' />
                </div>
                <div className='cont-input'>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffbf00" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                  </div>
                  <input type="number" placeholder='Phone Number' />
                </div>
                <div className='cont-input'>
                  <div>
                    <span className="material-symbols-outlined">
                      alternate_email
                    </span>
                  </div>
                  <input type="email" placeholder='Email' />
                </div>
                <div className='cont-input'>
                  <div>
                    <span className="material-symbols-outlined">
                      lock
                    </span>
                  </div>
                  <input type="password" placeholder='Password' />
                </div>
                <button type="submit">Register</button>
              </form>
            </div>
          </div>
        </div>


      </div>

    </div>
  );
}

export default Login;