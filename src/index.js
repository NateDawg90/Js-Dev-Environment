import './index.css';
import {getUsers, deleteUser} from './api/userApi';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

getUsers().then(res => {
  let usersBody = '';
  res.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  })

  global.document.getElementById('users').innerHTML = usersBody;

  const deleteLinks = global.document.getElementsByClassName('deleteUser');

  Array.from(deleteLinks, link => {
    link.onclick = function(e) {
      const element = e.target;
      e.preventDefault();
      deleteUser(element.attributes["data-id"].value);
      const row = element.parentNode.parentNode;
      row.parentNode.removeChild(row);
    };
  });
});

// ReactDOM.render(<App />, document.getElementById('root'));

