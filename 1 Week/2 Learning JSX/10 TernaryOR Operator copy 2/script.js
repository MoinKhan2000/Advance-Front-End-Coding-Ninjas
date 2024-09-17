let isLoggedIn = true; // Initial state: logged out

const Dashboard = () => {
  // User object for display
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    role: "Admin", // Try changing this to 'Admin' to see permission change
    img: null // You can add a URL to test image presence
  };

  return (
    <div className="container">
      <h1>Welcome to the Dashboard</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      {/* Conditionally showing permissions based on role */}
      <p>
        {user.role === 'Admin' ? 'You have all permissions.' : 'You have limited permissions.'}
      </p>

      {/* //! And operator always gives us first falsy and last truthy value. */}
      <p>
        console.log(true && 1 && 0 && 'hello' && false);  // 0
      </p>

      <p>
        console.log(true && 'hello'); // hello
      </p>
      <p>{user.role && user.role === 'Admin' && 'Turnary And Operator '}</p>

      {/* Checking if the user has an image */}
      <p>{user.img ? 'Image is present' : 'Image is not present'}</p>

      {/* Logout button */}
      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
};

const Login = () => {
  return (
    <div className="container">
      <h1>Please log in</h1>
      <button className="login-btn" onClick={handleLogin}>Login</button>
    </div>
  );
};

// Main Home component renders either the Dashboard or Login based on the isLoggedIn state
const Home = () => {
  return isLoggedIn ? <Dashboard /> : <Login />;
};

// Function to handle login, re-renders the app to show Dashboard
const handleLogin = () => {
  isLoggedIn = true;
  renderApp(); // Re-render the app after login
};

// Function to handle logout, re-renders the app to show Login screen
const handleLogout = () => {
  isLoggedIn = false;
  renderApp(); // Re-render the app after logout
};

// Function to render the entire app
const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<Home />);
};

// Initial render of the app
renderApp();
