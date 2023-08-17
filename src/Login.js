import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoUrl: userAuth.user.profileURL
            }))
        })
        .catch(error => alert(error))
    }
    const register = () => {
        if(!name) {
            return alert('Please enter a full name')
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then(userAuth => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })
            .then(() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic // photoUrl(our redux store) is different from photoURL(firebase). Just to distinguish and keep things simple.
                }))
            })
        })
        .catch(error => alert(error))
    }
  return (
    <div className="login">
      <img
        src="https://logodownload.org/wp-content/uploads/2019/03/linkedin-logo-1.png"
        alt="LinkedIn"
      />
      <form>
        <input 
            type="text" 
            placeholder='Full Name (required if registering)'
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <input 
            type="text" 
            placeholder='Profile pic URL (optional)' 
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}
        />
        <input 
            type="email" 
            placeholder='Email' 
            value={email}
            onChange={e => setEmail(e.target.value)}
        />
        <input 
            type="password" 
            placeholder='Password' 
            value={password}
            onChange={e => setPassword(e.target.value)}
        />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a memeber?{" "}<span onClick={register} className='login__register'>Register Now</span></p>
    </div>
  );
}

export default Login