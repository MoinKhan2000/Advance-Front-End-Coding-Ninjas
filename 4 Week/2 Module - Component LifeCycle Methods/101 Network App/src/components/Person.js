import { Component } from "react";

class Person extends Component {
  componentWillUnmount() {
    const { email } = this.props.person;
    // Adjust the message to match what the test expects
    alert(`A person with email ${email} was removed from your network!`);
  }

  render() {
    const { img, email } = this.props.person;
    const { index, removePerson } = this.props;

    return (
      <div className="person">
        <b onClick={() => removePerson(index)} style={{ cursor: "pointer" }}>
          X
        </b>
        <img alt={email} src={img} />
        <p>{email}</p>
      </div>
    );
  }
}

export default Person;
