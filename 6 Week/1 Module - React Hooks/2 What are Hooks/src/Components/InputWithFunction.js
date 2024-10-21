import { useState } from "react";
export default function Input() {
    const [user, setuser] = useState({ firstName: "", lastName: "" });
    const handleChange = (e) => {
        setuser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
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
