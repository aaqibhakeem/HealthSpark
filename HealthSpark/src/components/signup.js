import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <div>
        <div class="main">  	
		    <input type="checkbox" id="chk" aria-hidden="true"/>

			<div class="signup">
				<form>
					<NavLink to="/signup"><label for="chk" aria-hidden="true">Sign up</label></NavLink>
					<input type="text" name="txt"  placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div class="login">
				<form>
					<NavLink to="/login"><label for="chk" aria-hidden="true">Login</label></NavLink>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Log in</button>
				</form>
			</div>
	    </div>
    </div>
  )
}

export default Signup