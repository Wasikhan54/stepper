import React from 'react';

function Counter({ count }) { 
  return (
    <div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        
        <button style={{
          backgroundColor: count === 0 ? 'rgb(114, 101, 240)' : 'white',
         borderRadius: '100%',
          width: '48px',
          height: '48vh'  ,
          border: '2px solid #000',
          height: '51px;',
          color: count === 0 ? 'white' : 'black',
          fontWeight: 'bold',
        }}>1</button>
        <button style={{
          backgroundColor: count === 1 ? 'rgb(114, 101, 240)' : 'white',
         borderRadius: '100%',
          width: '48px',
          height: '48px',
          border: '2px solid #000',
          textAlign: 'center',
          height: '51px;',
          color: count === 1 ? 'white' : 'black',
          fontWeight: 'bold',
        }}>2</button>
        <button style={{
          backgroundColor: count === 2 ? 'rgb(114, 101, 240)' : 'white',
         borderRadius: '100%',
          width: '48px',
          height: '48px',
          border: '2px solid #000',
          height: '51px;',
          color: count === 2 ? 'white' : 'black',
          fontWeight: 'bold',
        }}>3</button>
       
       
      </div>
    </div>
  );
}

export default Counter;
