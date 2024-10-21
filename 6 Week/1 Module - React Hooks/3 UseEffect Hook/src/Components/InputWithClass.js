// import React from "react";

// export default class Input extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: "",
//             lastName: ""
//         }
//     }
//     handleFirstNameChange = (event) => {
//         this.setState({ firstName: event.target.value })
//     }

//     handleLastNameChange = (event) => {
//         this.setState({ lastName: event.target.value })
//     }

//     render() {
//         return (
//             <>
//                 <div className="section">
//                     <Row label="Name">
//                         <input onChange={(e) => { this.handleFirstNameChange(e) }} className="input" />
//                     </Row >
//                     <Row label="Last Name">
//                         <input onChange={(e) => { this.handleLastNameChange(e) }} className="input" />
//                     </Row >
//                 </div>

//                 <h2>Hello, {this.state.firstName} {this.state.lastName} </h2>

//             </>
//         )

//     }

// }


// function Row(props) {
//     const { label } = props;
//     return (
//         <>
//             <lable>{label}<br /></lable>
//             {props.children}
//             <hr />
//         </>
//     )
// }









import React from "react";

export default class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "" // Initialize lastName in the state as well
        };
        let timer = null

        // Bind event handler functions to `this` inside the constructor
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
    }

    // Event handler for first name input
    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    // Event handler for last name input
    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }


    // Multiple Side Effects.

    componentDidMount = () => {
        this.timer = setInterval(() => {
            console.log("Hello, World", Math.random() * 100);
        }, 1000);
    }

    componentWillUnmount = () => {
        clearInterval(this.timer);
    }

    render() {
        return (
            <>
                <div className="section">
                    <Row label="First Name">
                        <input onChange={this.handleFirstNameChange} className="input" />
                    </Row>
                    <Row label="Last Name">
                        <input onChange={this.handleLastNameChange} className="input" />
                    </Row>
                </div>

                <h2>Hello, {this.state.firstName} {this.state.lastName}</h2>
            </>
        );
    }
}

// Functional component for rendering each input row
function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    );
}
