import './App.css';
import { useState } from 'react';

function App() {
  let time = new Date().toLocaleTimeString();
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  let [ctime, setTime] = useState(time);

  
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  setInterval(updateTime, 1000);


  const itemValue = (event) => {
    setInputValue(event.target.value)
  }

  const changeMe = () => {
    setItems((oldItems) => {
      return [...oldItems, inputValue];
    });
    setInputValue("");
  }
  
 
  const deleteMe = ((event) => {
    if(event.target.tagName === 'SPAN'){
      event.target.parentElement.remove();
  }});
  return (
   <>
    <div className='main-div'>
      <div className='container'>
      <h2>{ctime}</h2>
      <br />
        <h1>ToDO List React.Js 🔥</h1>
        <br />
        <input type='text' value={inputValue} onChange={itemValue} placeholder='enter todo...'/>
        <button onClick={changeMe}>+</button>
        <ol>
        {items.map((curVal, index) => {
          return (
            <>
            <li>{curVal}<span onClick={deleteMe}>✖</span></li>
            </>
            )
        })}
          
        </ol>
      </div>
    </div>
   </>
  );
}

export default App;
