// Javascript.
/*
*/
const heading = document.createElement('h2');
heading.innerHTML = 'This is my heading'
heading.classList.add("header")
document.getElementById('root').append(heading)
console.log("Javascript Heading : ", heading);

// React.
const reactHeading = React.createElement("h1", { className: "header", id: "reactHead", children: "This is react heading !!" },)
console.log("React Heading : ", reactHeading);
ReactDOM.createRoot(document.getElementById('root')).render(reactHeading)

