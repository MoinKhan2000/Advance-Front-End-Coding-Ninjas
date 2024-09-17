// React with JSX Declarative Approach.
let jsxHeading = (<h1 className="heading" id="header">
  Hello JSX
</h1>);

// React with React.createElement
ReactDOM.createRoot(document.getElementById('root')).render(jsxHeading);


// What is the JSX equivalent of the following Javascript code ?
//   React.createElement("div",
//     {
//       id: "parent",
//       class: "parent-class"
//     },
//     React.createElement("p", null, "Hello world"));
{/*   Ans ->  <div id=” parent” class=” parent-class”><p>Hello world</p></div> */ }


// ReactDOM.createRoot(document.getElementById('root')).render(<h1>This is test</h1>)


//? Renderint multiple elements.
let jsxContent = (
  // React Fragment - <React.Fragment> </React.Fragment> || <> </>
  <>
    <div>
      This is main div
      <p>This is paragraph</p>
      <p>This is another paragraph</p>
      <button>
        Click Me Moin!
      </button>
    </div>

    <div>
      This is main div
      <p>This is paragraph</p>
      <p>This is another paragraph</p>
      <button>
        Click Me Moin!
      </button>
    </div></>
)

ReactDOM.createRoot(document.getElementById('root')).render(jsxContent);