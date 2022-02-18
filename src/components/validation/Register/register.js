import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom'
import firebase from 'firebase/compat/app';
import { auth, db } from '../../../firebase/firebase';
import './register.css'

import logo from '../../../assets/logo.png'

function Register() {

    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    let navigate = useNavigate();
    function goToLogin() {
        navigate("/login");
    }

    function goHome() {
        navigate("/");
    }

    const handleOnClick = (e) => {
        e.preventDefault()
        if(username && phone && email && pass) {
            auth.createUserWithEmailAndPassword(email, pass)
            .then(res => {
                console.log(res.user)
                if(res) {
                    db.collection('users').doc(res.user.uid).set({
                        uid: res.user.uid,
                        name: '',
                        username: username,
                        email: email,
                        phone: phone,
                        profilePhoto: '',
                        dateJoined: firebase.firestore.FieldValue.serverTimestamp(),
                    });
                }              
            })
            .then(() => {
                goToLogin();
            })
            .catch((er) => {
                console.log(er)
                alert(er)
            })
        } else {
            alert('Enter all the fields')
        }    
    }


    return (

        <div className="align">
            <div class="grid align__item">

    <div class="register">

     <img src={logo} alt="" />

      <h2>Sign Up</h2>

      <form action="" method="post" class="form">
          <div class="form__field">
          <input type="text" placeholder="Username" />
        </div>

        <div class="form__field">
          <input type="email" placeholder="info@mailaddress.com" />
        </div>
        <div class="form__field">
          <input type="number" placeholder="(+91)" />
        </div>
        <div class="form__field">
          <input type="password" placeholder="••••••••••••" />
        </div>

        <div class="form__field">
          <input type="submit" value="Sign Up" />
        </div>

      </form>

      <p>Already have an accout? <Link to="/login">Login</Link></p>

    </div>

  </div>
        </div>

        // <div className="register">
        //     <img onClick={goHome} src={logo} alt="" className='auth__Logo'/>
        //     <h2>Create your personal account</h2>
        //     <div className='register-container'>
        //         <form onSubmit={handleOnClick}>
        //             <div className='username'>
        //                 <label>Username</label><br/>
        //                 <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" name="first_name" required />
        //             </div>
        //             <div className='email'>
        //                 <label>Email address</label><br/>
        //                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" required />
        //             </div>
        //             <div className='location'>
        //                 <label>Phone Number</label><br/>
        //                 <input  value={phone} onChange={(e) => setPhone(e.target.value)} type="phonenumber" name="Phonenumber" required />
        //             </div>
    
        //             <div className='password'>
        //                 <label>Password</label><br/>
        //                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" name="password" required />
        //             </div>
                    
        //             <div className='register-button'>
        //                 <button id="sub_btn" type="submit">Register</button>
        //             </div>
        //         </form>
        //     </div>
        //     <div className='footer'>
        //         <p>Already have an account? <Link to="/login">Login</Link>.</p>
        //     </div>
           
        // </div>
    )

}

export default Register;
