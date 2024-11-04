import React, { useState } from "react";
import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  // State to store input values and loading state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Submit handler function
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required.");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password should be at least 6 characters.");
      return;
    }

    // Simulate loading and signup process
    setLoading(true);
    try {
      // Perform sign-up logic here, e.g., call to backend
      // Example: await signup(formData);

      console.log("User registered:", formData);
    } catch (error) {
      setError("Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h2 className={styles.loginTitle}>Sign Up</h2>
        {error && <p className={styles.error}>{error}</p>}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={onChangeHandler}
          placeholder="Enter Name"
          className={styles.loginInput}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={onChangeHandler}
          placeholder="Enter Email"
          className={styles.loginInput}
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChangeHandler}
          placeholder="Enter Password"
          className={styles.loginInput}
        />
        <button type="submit" className={styles.loginBtn} disabled={loading}>
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
