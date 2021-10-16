import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [name, setName] = useState(()=>{
    const value = localStorage.getItem("name");
    const InitValue = JSON.parse(value);
    return InitValue || "";
  });
  
  const handleInput = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  }

  useEffect( () => {
    localStorage.setItem("name",  JSON.stringify(name));
  }, [name]);

  return (
    <React.Fragment>
        <form className="form">
          <label className="form_label">
            Ingresa tu nombre: 
          </label>
          <input
          type="text"
          value={name}
          placeholder="Ingresa tu nombre"
          onChange={handleInput}
          className="form_input"
          >
          </input>
          <button type="submit" className="form_button">
            Recarga
          </button>
          <p className="form_p">
            "Hello, {name}!!!, you're testing a new feature." 
          </p>
        </form>
    </React.Fragment>
  );
}

export default App;
