import { useState } from 'react';
import './App.css';
import Counter from '../counter';

function App() {
  const [count, setCount] = useState(0);

  function clickHandler() {
   if(count > 0){
    setCount(count - 1);
   }
  }
function nextHandler(){
  if(count < 2){
    setCount(count + 1);
  } 
}

  return (
    <div>
      <Counter count={count} />
      <div className="main">
        <h2 style={{  fontWeight: 'bold'}}>
          {count === 0 ? ' Step 1: Learn React ⚛️' : count === 1 ? ' Step 2: Earn income 💸' : ' Step 3:Invest your income 🤑'}
        </h2>
      </div>
      <div id="card" className="card">
        <button style={{ marginRight: '120px' ,backgroundColor: 'rgb(114, 101, 240)',color: '#ffffff'}} onClick={clickHandler}>Previous</button>
        <button style={{backgroundColor: 'rgb(114, 101, 240)',color: '#ffffff'}} onClick={nextHandler}>Next</button>
      </div>
    </div>
  );
}

export default App;
