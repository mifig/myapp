import './App.css';
import Hello from "./Hello";
import { useState } from 'react';

function App() {
  const [color, setColor] = useState("#ffffff");
  const [name, setName] = useState(null);

  const handleColorChange = (event) => {
    setColor(event.currentTarget.value);
  };

  const handleNameChange = (event) => {
    setName(event.currentTarget.value)
  }
 
  return (
    <>
      <p>Current color: {color}</p>
      <input type="color" onChange={handleColorChange} value={color} />
      <div>
        <input type="text" placeholder='Please enter your name' onChange={handleNameChange} />
      </div> 
      {name && <Hello name={name} age={30} bgColor={color}/>}
      <p>Your name is {name.length} chars long.</p>
      <a href="https://www.google.com">Google it</a>
    </>
  );
}

export default App;
