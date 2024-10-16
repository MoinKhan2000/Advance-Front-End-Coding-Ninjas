import React from "react";

export default class ComponentA extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Component A",
      users: [], // Initialize an empty array for the users
    };

    console.log(`Component A Constructor Called`);
  }

  static getDerivedStateFromProps() {
    console.log(`Component A getDerivedStateFromProps called`);
    return null;
  }

  componentDidMount() {
    console.log(`Component A componentDidMount Called`);
    // Fetching users from JSONPlaceholder API
    // fetch('https://jsonplaceholder.typicode.com/users')
    fetch('https://jsonplaceholder.typicode.com/asd323s')
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        this.setState({ users });
      });
  }

  render() {
    console.log(`Component A Render Function Called`);

    const { users } = this.state;

    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>User List:</h2>
        <ul>
          {users.length > 0 ? (
            users.map((user) => (
              <li key={user.id}>
                {user.name} - {user.email}
              </li>
            ))
          ) : (
            <li>Loading users...</li>
          )}
        </ul>
      </div>
    );
  }
}
