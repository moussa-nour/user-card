import axios from "axios" 
import './App.css';
import {useEffect,useState} from 'react'
import UserList from "./UserList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  const [users,setUser]=useState([]);
  useEffect(()=> {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then ((result)=>{
      setUser(result.data)
    })
  },[] )

    return (
      


    <div className="App">
      <header className="App-header">
      {users.map((user)=> (<UserList user={user}/>))} 
      </header>
    </div>
    
  );
    }


export default App;
