const CartItem = ({ name, age, gender, currentClass, subject }) => {
  return (
    <div style={{
      borderRadius: "4px",
      padding: "16px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      backgroundColor: "#f9f9f9",
      minWidth: "200px",
      textAlign: "center",
      margin: "10px"
    }}>

      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Gender:</strong> {gender}</p>
      <p><strong>Class:</strong> {currentClass}</p>
      <p><strong>Subject:</strong> {subject}</p>

    </div>
  );
};

const App = () => {
  const students = [
    { name: "Moin", age: 21, gender: "Male", currentClass: "12th", subject: "PCM" },
    { name: "Mohsin", age: 22, gender: "Male", currentClass: "12th", subject: "Art" },
    { name: "Mahi", age: 19, gender: "Female", currentClass: "10th", subject: "General" },
    { name: "Tanzila", age: 12, gender: "Female", currentClass: "10th", subject: "General" }
  ];

  return (
    <div style={{ padding: "10px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", color: "#007bff" }}>Student Cart</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap" }}>
        {
          students.map((student, index) => (
            <CartItem key={index} {...student} />
          ))
        }
      </div>
    </div>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
