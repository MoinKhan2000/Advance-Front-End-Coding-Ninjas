import React, { useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const ForgetPassword = () => {
  const [message, setMessage] = useState('');

  const { email, setEmail } = useLocalStorage(); //! using custom uselocalStorage hoo.
  // const [email, setEmail] = useState('');
  // firstly getting the email if exists
  // useEffect(() => {
  //   if (localStorage.email) {
  //     setEmail(localStorage.email);
  //   }
  // }, [])
  // Secondly setting the email. 
  // useEffect(() => {
  //   localStorage.setItem('email', email);
  // }, [email])  // act as a component did mount and also updated whenever email is changing.


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email.');
    } else {
      setMessage('Password reset link sent to your email.');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Forgot Password</h1>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              placeholder="Enter your email"
            />
          </div>
          <input type="submit" value="Send Reset Link" style={styles.submitButton} />
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '400px',
    width: '100%',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '8px',
  },
  formGroup: {
    marginBottom: '15px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  submitButton: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: 'red',
  },
};

export default ForgetPassword;
