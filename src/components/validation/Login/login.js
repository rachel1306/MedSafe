import React, { useState, useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { AuthContext } from '../../../authcontext/authcontext'
import { auth } from '../../../firebase/firebase';
import './login.css'

//import logo from '../../../assets/logo.png'

function Login() {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const { handleUser } = useContext(AuthContext);

    let navigate = useNavigate();

    
    function goHome() {
        navigate("/");
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        if(email && pass) {
            auth.signInWithEmailAndPassword(email, pass)
                .then(res => {
                    handleUser(res.user)
                    if(res) {
                        //

                     }              
                })
                .then(() => {
                    goHome();
                })
                .catch((er) => {
                    console.log(er)
                    alert(er)
                })
        } else {
            alert('Enter email and password')
        }    
    }


  return 
//   <div className="login">
//             <img onClick={goHome} src={logo} alt="" className='auth__Logo'/>
//             <h2>Sign in to us</h2>
//             <div className='login-container'>
//                 <form onSubmit={handleOnClick} className='form'>
//                     <div className='username'>
//                         <label>Email address</label><br/>
//                         <input value={email} onChange={(e) => setEmail(e.target.value)}  className='login-input' type="text" name="first_name" required />
//                     </div>
//                     <div className='password'>
//                         <label>Password</label>
//                         <input value={pass} onChange={(e) => setPass(e.target.value)} className='login-input' type="password" name="password" required />
//                     </div>
//                     <div className='login-button'>
//                         <button id="sub_btn" type="submit">Login</button>
//                     </div>
//                 </form>
//             </div>
            
//             <div className='footer'>
//                 <p>First time? <Link to="/register">Create an account</Link>.</p>
//             </div>
//         </div>


}

export default Login;