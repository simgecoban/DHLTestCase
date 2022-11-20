import React, { useState, useEffect } from 'react';
import Navbar from './Nav.js';
import './App.css';
import './NavBar.css';
import UserCard from './UserCard.js';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { TextField } from '@mui/material';



function App() {
  const [allUsers, setAllUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const [userNumber, setUserNumber] = useState([]);

  async function fetchData() {
    let userData;
    try {
      // get the data from the api
      const response = await fetch(`https://randomuser.me/api/?results=${userNumber}`);
      // convert the data to json
      userData = await response.json();
      setAllUsers(userData.results);
      setUsers(userData.results);
    } catch (error) {
      console.error(error);
      userData = [];
    }
  }

  useEffect(() => {
    fetchData();
  }, [])



  const filterCards = event => {
    const value = event.target.value.toLowerCase();
    const filteredUsers = allUsers.filter(user => (`${user.name.first} ${user.name.last}`.toLowerCase().includes(value)));
    setUsers(filteredUsers);
  }

  const handleChange = event => {
    const userNumber = event.target.value;
    setUserNumber(userNumber);

  };




  return (
    <div className="App">

      <Navbar />


      <div className='title'> <p>Get Random People</p> </div>

      <div className='getPeople'>


        <TextField className='txtField' name='field' inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} id="outlined-basic" ariant="outlined" onChange={handleChange} type='number' value={userNumber}></TextField>
        <Button className='btnFetch' onClick={fetchData} variant='contained' startIcon={<SendIcon />} color='primary' size='medium' > FETCH USERS </Button>

      </div>


      <div className='search'>
        <input onChange={''} className="search-box" onInput={filterCards} placeholder="Search People..." />

      </div>


      <div className="cards-container">


        {users.map((user, index) => (
          <UserCard key={index} userData={user} />
        ))}
      </div>



    </div>
  );
}

export default App;
