import "./styles.css";

// Refactor the Card component
export const Card = ({ name, about }) => (
  <div className="card">
    <h3>Name: {name}</h3>
    <span>About: {about}</span>
    <button className="card-button">Click Me</button>
  </div>
);

export default function App() {
  return <Card name="Your Name." about="Your Message." />;
}
