import '../App.css';
import '../Login.css';

function Login() {

  return (
    <div className="body">
      <div className='cont-login'>
        <div className='options'>
          <div className='options-title'>
            <h3>Log In</h3>
            <h3>Sign Up</h3>
          </div>
          <div className='btn-option'>
            <div className='btn-dash'></div>
            <button className='btn-rot'>
              <span class="material-symbols-outlined">
                north_east
              </span>
            </button>
          </div>
        </div>
        
        <div className='login fondo-cont tam-cont'>
          <h2>Log In</h2>
          <form>
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
          <a href='#' className='link-pass'>Forgot your password?</a>
        </div>

        <div className='cont-signup fondo-cont tam-cont'>
          <h2>Sign Up</h2>
          <form>
            <div className='cont-input'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                  <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                </svg>
              </div>
              <input type="text" placeholder='Full Name' />
            </div>
            <div className='cont-input'>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffbf00" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
  );
}

export default Login;