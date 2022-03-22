import axios from 'axios';
import {useEffect, useState} from'react';
import './App.css';
import './styles/UsersList.css'
import UsersList from './components/UsersList';
import UsersFrom from './components/UsersFrom';

function App() {

  const [ users, setUsers ] = useState([]);
  const [selectUser, setSelectUser] = useState(null);

  useEffect(()=>{
    axios
    .get('https://users-crud1.herokuapp.com/users/')
    .then((res)=>{
      setUsers(res.data)
      console.log(res.data)
    })
  },[]);
  const getUsers =()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
        .then((res)=>setUsers(res.data))
  }

  const addUser =(user) =>{
    axios.post('https://users-crud1.herokuapp.com/users/', user)
      .then(()=>getUsers())
      .catch((error)=>alert("Ingrese los Datos Correctos"))
  }
  const removeUser=(id)=>{
    axios
      .delete(`https://users-crud1.herokuapp.com/users/${id}/`)
      .then(()=>getUsers())
  }
  const selectEditUser =(User)=>{
    setSelectUser(User);
  }
  return (
    <div className="App">
      <UsersFrom 
        addUser ={addUser}
        getUsers={getUsers}
        selectEditUser={selectEditUser}
        selectUser={selectUser}
      />
      <UsersList 
        users = {users}
        removeUser={removeUser}
        selectEditUser={selectEditUser}
        selectUser={selectUser}
      />
    </div>
  );
}

export default App;
