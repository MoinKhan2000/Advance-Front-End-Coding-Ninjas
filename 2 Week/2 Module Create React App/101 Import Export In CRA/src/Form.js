// Export the Form component and also import the name and email from HomePage component

function handleSubmit(e) {
  e.preventDefault();
}
import { name, email } from './HomePage.js'

const Form = () => (
  <>
    <div>
      <form onSubmit={handleSubmit}>
        <h3>Login Page</h3>
        <input type="text" placeholder="Name" value={name} />
        <br />
        <br />
        <input type="email" placeholder="Email" value={email} />
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  </>
);
export default Form;