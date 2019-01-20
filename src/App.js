import React, { Component } from 'react';
import {getUsers} from './api/userApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    getUsers().then(res => {
      var users = res;
      this.setState({ users });
    })
  }

  render() {
    return (
      <div>
        <h1>Users</h1>
        <table>
          <thead>
            <th></th>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </thead>
          <tbody id="users">
            {this.state.users.forEach(user => {
              <tr key={user.id}>
                <td><a href="#" data-id={user.id} className="deleteUser">Delete</a></td>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
