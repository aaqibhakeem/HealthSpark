import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div class="main">  	
        <div></div>
		    <input type="checkbox" id="chk" aria-hidden="true"/>
			<div class="signup">
				<form>
					<NavLink to="/login"><label for="chk" aria-hidden="true">Log in</label></NavLink>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Log in</button>
				</form>
			</div>
	    </div>
    </div>
  )
}

export default Login