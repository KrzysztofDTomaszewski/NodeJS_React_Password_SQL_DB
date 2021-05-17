import './App.css';
import { useState } from 'react'
import Axios from 'axios'
function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')

/*
- className=AddPassword, setPassword && setTitle will be encapsulated through input
- and parsed into state
*/

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password, 
      title: title,
    });
  };

  return (
    <div className="App">

    
      
      <div className="AddingPassword">

      <input 
          type="text" 
          placeholder="Ex. Facebook" 
          onChange={(event) => {
            setTitle(event.target.value)
          }}
      />

        <input 
          type="text" 
          placeholder="Ex. Password123" 
          onChange={(event) => {
            setPassword(event.target.value)
          }}
        />

       
        
        <button onClick={addPassword}> Add Login </button>
      </div>


    </div>
  );
}

export default App;