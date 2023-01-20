import React,{useState} from "react";
const AddUser=()=>{
const[textValue,setTextValue]=useState('');
const nameChangeHandler=(event)=>{
    setTextValue(event.target.value);
}
const[ageValue,setAgeValue]=useState('');
const ageChangeHandler=(event)=>{
    setAgeValue(event.target.value);
}
const addUserHandler=()=>{
   let data={
    name:textValue,
    age:ageValue
   };
   
}
return(<form onSubmit={addUserHandler}>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" onChange={nameChangeHandler}></input>
    <label>Age(Years)</label>
    <input type="number" onChange={ageChangeHandler}></input>
    <button type="submit">Add User</button>
</form>)
}
export default AddUser;