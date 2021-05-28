import './App.css'; // Import external CSS sheet.
import { useState, useEffect } from 'react' // Use state hooks.
import Axios from 'axios' // Promise based HTTP module.

function App() {

  const [password, setPassword] = useState('') // Create constant variable called password and setPassword to be used by state (current values stored within the app).
  const [title, setTitle] = useState('') // Same for the title: 'Facebook' for example.
  const [passwordList, setPasswordList] = useState([]) // Initialise an empty password list array, this will allow us to populate and print all passwords stored here.


  /*
    useEffect function, makes use of Axios to create a GET request to the specified URL: "/showpassword".
    This information is encapsulated within 'response'. This will be used to display all the currently
    stored passwords within MySQL database. Therefore, when a user sends a POST request to make a new one,
    this will refresh with the new password added.
  */
  useEffect(()=> {
    Axios.get('http://localhost:3001/showpasswords').then((response)=> {
      setPasswordList(response.data); // Container for holding all passwords in console log or front-end when implemented.
    });
  }, [])

  /*
    Constant variable which allows user to addPasswords into the DB.
    First, axios sends a post request to route '/addpassword', the 
    request consists of password and title, which is passed into 
    the 'password' and 'title' variables in state (useState).
  */
  const addPassword = () => {
    Axios.post('http://localhost:3001/addpassword', {
      password: password, 
      title: title,
    });
  };

  /*
    DecryptPassword function, takes the value stored in encryption, send it to route
    '/decryptpassword' in MySQL DB, before it reaches the DB, it is passed from 'EncryptionHandler.js'.
    Therefore, the application first sends the input to the back-end 'EncryptionHandler.js', before
    sending the input to the DB.

    Password and IV, will be taken out of state. then the response is sent to the setPasswordList to
    read through the data stored within the array. Then, the application will return the value of id 
    (unique ID key), which will be acompanied by the password, title and iv from 'EncryptionHandler.js'.
  */
  const decryptPassword = (encryption) => {
    Axios.post('http://localhost:3001/decryptpassword', { 
      password: encryption.password,
      iv: encryption.iv 
    }).then((response)=> {
      setPasswordList(
        passwordList.map((val) => {
          return val.id === encryption.id 
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
