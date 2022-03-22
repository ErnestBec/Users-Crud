import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/FormUsers.css';
import imgUser from '../Images/pngwing.com.png' 

const UsersFrom = ({addUser, getUsers, selectEditUser, selectUser}) => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [password, setPassword] = useState("");
    
    const empty =()=>{
        setFirstName("");
        setLastName("");
        setEmail("");
        setBirthday("");
        setPassword("");
    } 
    
    useEffect(()=>{
        if(selectUser){
            setFirstName(selectUser.first_name);
            setLastName(selectUser.last_name);   
            setEmail(selectUser.email);
            setBirthday(selectUser.birthday)
            setPassword(selectUser.password);
        }
    },[selectUser])

    const submit = (e)=>{
        e.preventDefault();
        const users ={
            birthday,
            email,
            first_name: firstName,
            last_name: lastName,
            password
        }
        if(selectUser){
            axios
                .put(`https://users-crud1.herokuapp.com/users/${selectUser.id}/`, users)
                .then(()=>{
                    getUsers();
                    selectEditUser(null);
                })
                .catch((error)=>alert("Ingrese los Datos Correctos"))
                empty();
        }else{
            addUser(users);
            empty();
        }
    } 
    const Limpiar =(e)=>{
        e.preventDefault();
        empty();
        selectEditUser(null);
    }

    return (
        <div className='FormUsers'>
            <img src={imgUser} alt="" />            
            <form>
                <div className="input-container">
                    <label htmlFor="first-name"> Frist Name:</label>
                    <input type="text" 
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstName}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="last-name"> Last Name:</label>
                    <input type="text" 
                        onChange={(e) => setLastName(e.target.value)}
                        value = {lastName}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="email">Correro    :</label>
                    <input type="email" 
                        onChange={(e) => setEmail(e.target.value)}
                        value = {email}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="birthday"> Birthday:</label>
                    <input type="date" 
                        onChange={(e) => setBirthday(e.target.value)}
                        value = {birthday}
                    />
                </div>
                <div className="input-container">
                    <label htmlFor="Password"> Password:</label>
                    <input type="password" 
                        onChange={(e)=> setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <button onClick={submit}><i class="fas fa-plus"></i> Agregar Nuevo Usuario</button>
                {
                     selectUser? <button onClick={Limpiar} >Quitar Seleccion</button>:""
                }
            </form>
        </div >
    );
};

export default UsersFrom;