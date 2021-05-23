import './App.css';
import { useState, useEffect } from 'react'
import Axios from 'axios'
function App() {

  const [password, setPassword] = useState('')
  const [title, setTitle] = useState('')
  const [passwordList, setPasswordList] = useState([])
/*
- className=AddPassword, setPassword && setTitle will be encapsulated through input
- and parsed into state
*/

  useEffect(()=> {
    Axios.get('http://localhost:3001/showpasswords').then((response)=> {
      setPasswordList(response.data); //container for holding all passwords in console log
    });
  }, [])

  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password, 
      title: title,
    });
  };

  const decryptPassword = (encryption) => {
    Axios.post('http://localhost:3001/decryptpassword', { 
      password: encryption.password,
      iv: encryption.iv 
    }).then((response)=> {
      setPasswordList(
        passwordList.map((val) => {
          return val.id == encryption.id 
          ? {
              id: val.id, 
              password: val.password, 
              title: response.data,
              iv: val.iv, 
            } 
            : val; 
        })
      );
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

      <div className='Passwords'>
        {passwordList.map((val, key) => {
          return (
            <div
              className='password'
              onClick={() => {
                decryptPassword({ 
                  password: val.password,
                  iv: val.iv, 
                  id: val.id, 
                });
              }}
              key={key} //error fix
            > 
              <h3>{val.title}</h3> 
            </div> //val.password (will show MySQL password in SHA-256)
          );
        })}
      </div>
    </div>
  );
}

export default App;
