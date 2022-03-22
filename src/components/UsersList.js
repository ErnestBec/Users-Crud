import React from 'react';


const UsersList = ({users, removeUser, selectEditUser}) => {
    return (
        <div className='UsersList'>
            <h2>Users</h2>
            <ul >
                {
                    users.map(user =>(
                        <li key={user.id} className='Card-User'>
                            <p><b>Name: </b>{user.first_name}</p>
                            <p><b>Last Name: </b>{user.last_name}</p>
                            <p><b>email: </b>{user.email}</p>
                            <p><b>Birthday: </b>{user.birthday}</p>
                            <button onClick={()=>removeUser(user.id)}><i className="fas fa-trash-alt"></i></button>
                            <button onClick={()=>selectEditUser(user)}><i className="fas fa-user-edit"></i></button>                       
                        </li>
                    ))
                    }   
            </ul>

        </div>
    );
};

export default UsersList;