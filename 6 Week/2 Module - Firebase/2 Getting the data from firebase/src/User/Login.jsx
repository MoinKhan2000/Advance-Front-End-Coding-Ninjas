import React, { useEffect, useState } from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';

const Login = () => {
  // const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const { email, setEmail } = useLocalStorage();    //! Using custom uselocalStorage hook.
  // firstly getting the email if exists
  // useEffect(() => {
  //   if (localStorage.getItem('email')) {
  //     setEmail(localStorage.getItem('email'));
  //   }
  // }, [])  // act as a component did mount only 
  // secondly setting the email.
  // useEffect(() => {
  //   localStorage.setItem('email', email);
  // }, [email])  // act as a component did mount and also updated whenever email is changing.



  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMessage('Please fill in both fields.');
    } else {
      // Normally, here you'd handle the login request
      setMessage('Logged in successfully!');
    }
  };

  return (
    <div style={styles.container}>
      <h1>Login</h1>
      <div style={styles.formContainer}>
        <form onSubmit={handleLogin} style={styles.form}>
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
          <div style={styles.formGroup}>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              placeholder="Enter your password"
            />
          </div>
          <input type="submit" value="Login" style={styles.submitButton} />
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
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: 'green',
  },
};

export default Login;
