import React, { useState, Fragment } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';


function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {

    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: userName, age: userAge, id: Math.random().toString() }]
    });

  };


  return (
    <Fragment>

      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

    </Fragment>
  );
}

export default App;
