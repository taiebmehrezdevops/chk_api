import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './UserList';

function App() {
  const [user, setUser] = useState([]);
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users").then((result)=> setUser(result.data));
  }, []);
  return (
    <div>
      <UserList user={user}/>
    </div>
  );
}

export default App;
