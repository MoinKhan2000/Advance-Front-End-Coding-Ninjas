let isLoggedIn = false;

const Home = () => {
  if (isLoggedIn) {
    return (
      <div className="container">
        <h1>Welcome to Home</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Please log in</h1>
        <button className="login-btn" onClick={handleLogin}>Login</button>
      </div>
    );
  }
};

const handleLogin = () => {
  isLoggedIn = true;
  renderApp(); // Re-render the app with updated state
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
