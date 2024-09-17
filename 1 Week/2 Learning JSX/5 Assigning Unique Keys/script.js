const App = () => {
  const cars = ["BMW", "Audi", "Nexa", "Toyota", "Maruti", "Rolls Roys", "Honda"]

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Hello, World How Are You? Cars Available</h1>
      <ol >
        {
          cars &&
          cars.map((car, index, array) => {
            return <li key={index}>{car}</li>
          })
        }
      </ol>

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)