import '../App.css';

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
            <button className='btn-login'>
              <span class="material-symbols-outlined">
                north_east
              </span>
            </button>
            <button className='btn-signup'>
              <span class="material-symbols-outlined">
                north_east
              </span>
            </button>
          </div>
        </div>
        <div className='login'>
          <h2>Log In</h2>
          <form>
            <div>
              <div>
                <span class="material-symbols-outlined">
                  alternate_email
                </span>
              </div>
              <input type="email" placeholder='Email' />
            </div>
            <div>
              <span class="material-symbols-outlined">
                lock
              </span>
              <input type="password" placeholder='Password' />
            </div>
            <button type="submit">Login</button>
          </form>
          <a href='#'>Forgot your password?</a>
        </div>

      </div>
    </div>
  );
}

export default Login;