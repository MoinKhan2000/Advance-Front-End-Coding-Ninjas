import { useEffect, useState } from "react";
export default function Input() {
    const [user, setuser] = useState({ firstName: "", lastName: "" });

    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    // Similar to componentDidMount and componentDidUpdate combined in class component
    //? Without the dependency array it will act as a combination of componentDidMount and componentDidUpdate
    //? With the empty dependency array it will act as a componentDidMount,
    //? With the dependency array with value it will render first and then re-render only when the dependency array value is beign changed.

    useEffect(() => {
        console.log(`useEffect() called`);
        document.title = `${user.firstName} ${user.lastName}`
    }, [user])

    /*
        How useEffect works in your code:
        useEffect(() => { ... }, [user]):

        useEffect is a React Hook that lets you perform side effects in function components.
        It runs after the component renders or re-renders.
        The second argument is the dependency array [user]. It tells useEffect to run only when the user state changes.
    */

    // Performing multiple side-effects.
    useEffect(() => {
        let timer = setInterval(() => {
            console.log(`useEffect() called + Math.random() `, Math.random() * 100);
        }, 2000);

        // Clean up function to prevent memory leak
        return () => {
            clearInterval(timer);
        }
    })


    return (
        <>
            <div className="section">
                <Row label="Name">
                    <input className="input" name="firstName" onChange={(event) => { handleChange(event) }} />
                </Row >
                <Row label="Last Name">
                    <input className="input" name="lastName" onChange={(event) => { handleChange(event) }} />
                </Row >
            </div>

            <h2>Hello, {user.firstName} {user.lastName} </h2>

        </>
    )
}


function Row(props) {
    const { label } = props;
    return (
        <>
            <lable>{label}<br /></lable>
            {props.children}
            <hr />
        </>
    )
}
