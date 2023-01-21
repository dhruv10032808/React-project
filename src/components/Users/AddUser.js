import React,{useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from '../UI/Button'
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
const AddUser=(props)=>{
const[enteredUserName,setEnteredUserName]=useState('');
const usernameChangeHandler=(event)=>{
    setEnteredUserName(event.target.value);
}
const[enteredAge,setEnteredAge]=useState('');
const ageChangeHandler=(event)=>{
    setEnteredAge(event.target.value);
}
const [error,setError]=useState();
const addUserHandler=(event)=>{
    event.preventDefault();
    if(enteredUserName.trim().length===0||enteredAge.trim().length===0){
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
          });
        return;
    }
    if(+enteredAge<1){
        setError({
            title: 'Invalid age',
            message: 'Please enter a valid age (> 0).',
          });
        return;
    }
   props.onAddUser(enteredUserName,enteredAge);
   setEnteredUserName('');
   setEnteredAge('');
}
const errorHandler=()=>{
    setError(null);
}
return(<Wrapper>{error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}<Card className={classes.input}><form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={usernameChangeHandler} value={enteredUserName}></input>
    <label htmlFor="age">Age(Years)</label>
    <input type="number" id="age" onChange={ageChangeHandler} value={enteredAge}></input>
    <Button type="submit">Add User</Button>
</form></Card></Wrapper>)
}
export default AddUser;