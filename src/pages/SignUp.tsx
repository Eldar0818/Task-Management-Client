import React, { useState } from 'react'
import styles from '../assets/styles/signup.module.css'
import appIcon from '../assets/taskicon.png'
import { Link } from 'react-router-dom'
import { FaEye } from "react-icons/fa";

const SignUp = () => {

  const [password, setPassword] = useState('')
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const [showPassword, setShowPassword] = useState(false)

  const handleSignUp = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted...');
  }

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header>
          <img src={appIcon} alt="app-icon" className={styles.icon} />
          <h2 className={styles.title}>SIGN UP</h2>
        </header>
        <form onSubmit={handleSignUp}>
          <div className={styles.inputs}>
            <label htmlFor="firstname">*FirstName:</label>
            <input type="text" id='firstname' required/>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="lastname">*LastName:</label>
            <input type="text" id='lastname' required/>
          </div>
          <div className={`${styles.inputs} ${styles.passInputs}`}>
            <label htmlFor="password">*Password:</label>
            <input 
              type={showPassword ? 'text' : 'password'}
              id='password' 
              required
              value={password}
              onChange={handlePasswordChange}
            />
            { password && 
            <FaEye 
              className={styles.revealIcon}
              onClick={() => setShowPassword(!showPassword)}
            /> }
          </div>
          <div className={styles.inputs}>
            <label htmlFor="email">*Email:</label>
            <input type="email" id='email' required/>
          </div>
          <div className={styles.inputs}>
            <label htmlFor="phone">*Contact Number:</label>
            <input type="number" id='phone' required/>
          </div>
          <button type="submit" className={styles.submitBtn}>SIGN UP</button>
        </form>
        <div className={styles.terms}>
          <input type="checkbox" />
          <span>I accept privacy policy and terms.</span>
        </div>
        <p className={styles.redirect}>
          Have already an account? Go to <Link to='/sign-in'>Sign In</Link>
        </p>
      </div>
    </section>
  )
}

export default SignUp