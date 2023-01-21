import React,{ useState,Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
const App = () => {
  const [usersList,setUsersList]=useState([])
  const addUserHandler=(uName,uAge,uCollege)=>{
       setUsersList(prevUsersList=>{
            return [...prevUsersList,{name:uName,age:uAge,college:uCollege,id:Math.random().toString()}];
       })
  }
  return(<Fragment>
     <AddUser onAddUser={addUserHandler}/>
  <UserList users={usersList}/>
  </Fragment>)
}
export default App;
