// Imports
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Context/usersContext";
import styles from "./SignUp.module.css";

// Functional component for the signUp
export default function Register() {
    // Consuming User Context
    const { name, email, password, setName, setEmail, setPassword, handleSignUp } = useUserContext();
    let navigate = useNavigate();

    // Calling signup
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignUp();
        navigate("/");
        console.log("SignUp successful");
    };

    // Returning JSX
    return (
        <div className={styles.signUpContainer}>
            <form className={styles.signupForm} onSubmit={handleSubmit}>
                <h1 className={styles.heading}>Sign Up</h1>
                <input value={name} name="name" type="text" required={true} placeholder="Enter Name" onChange={(e) => setName(e.target.value)} />
                <input value={email} name="email" type="email" required={true} placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} />
                <input value={password} name="password" type="password" required={true} placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className={styles.signupBtn}>Sign Up</button>
            </form>
        </div>
    )
}