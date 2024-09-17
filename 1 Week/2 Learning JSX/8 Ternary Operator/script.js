let isLoggedIn = false;

const Dashboard = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin"
  }
  return (<div className="container">
    <h1>Welcome to Dashboard</h1>
    <p>{user?.name}</p>
    <p>{user?.email}</p>
    <p>{user?.role}</p>
    <p>{user ? user.img ? 'Image is present' : 'Image is not present' : 'Null'}</p>
    <button className="logout-btn" onClick={handleLogout}>Logout</button>
  </div>)
}
const Login = () => {
  return (<div className="container">
    <h1>Please log in</h1>
    <button className="login-btn" onClick={handleLogin}>Login</button>
  </div>)
}
const Home = () => {
  // Returing using the ternary operator.
  return isLoggedIn ? <Dashboard /> : <Login />
};

const handleLogin = () => {
  isLoggedIn = true;
  renderApp();
  // Re-render the app with updated state
};

const handleLogout = () => {
  isLoggedIn = false;
  renderApp(); // Re-render the app with updated state
};

// Function to render the app
const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
};

// Initial render
renderApp();
