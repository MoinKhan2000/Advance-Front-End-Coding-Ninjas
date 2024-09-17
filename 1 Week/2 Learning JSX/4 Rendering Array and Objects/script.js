const App = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const myObj = {
    name: "Moin Khan",
    age: 21,
    city: "Madhya Pradesh"
  }
  return (
    <div>
      <h1>Hello, World This is a React APP!</h1>
      {/* Directly printing the array */}
      <p>{arr}</p>
      {/* Iterating through an array */}
      {
        arr &&
        arr.map((elem, index) => {
          return <span key={index}>{elem}&nbsp;</span>
        })
      }

      {/* Directly printing the object */}
      {/* {myObj}  Throws an error because we are printing the whole object directly*/}
      <p>Name : {myObj.name}</p>
      <p>Age : {myObj.age}</p>
      <p>City : {myObj.city}</p>

      {/* Iterating through an object */}
      {console.log(Object.keys(myObj))}
      {
        myObj &&
        Object.keys(myObj).map((elem) => {
          return <p key={elem}>{myObj.elem}</p>
        })
      }

    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)