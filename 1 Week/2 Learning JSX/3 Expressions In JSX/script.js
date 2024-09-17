const sum = (a, b) => {
  return a + b
}

const App = () => {
  let name = "Moin Khan"
  let age = 21;
  let demo = null;
  let undef;
  let bool = true;

  // JSX Expressions.
  // Interpolation of variables.
  // Ternary operator for conditional rendering.
  // Logical AND operator for null and undefined handling.
  // Function call as an expression.
  const heading = <h1> Heading Of the App.</h1>
  const greeting = name && name.length > 0 ? `<h1> Hello, ${name}! </h1>` : "Hello, World!";

  return (
    <>
      {heading}
      {/* Printing all the variables to see the results. */}
      <p> String : {name}</p>
      <p> Number : {age}</p>
      <p> Null : {demo}</p>
      <p> Undefined : {undef}</p>
      <p> Boolean Value : {bool}</p>
      <p>Sum of 1, and 2 is : {sum(1, 2)}</p>
      {greeting}
    </>)

}
console.log(App());
ReactDOM.createRoot(document.getElementById('root')).render(<App />);