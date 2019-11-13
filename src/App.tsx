import React from 'react';
import Functional from './Components/Functional';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Toggle visibility with different type of components</h1>
      <h2>#functional #class #styled</h2>
      
      <div className="container">
        <div className="row-item">
          <Functional />
        </div>

        <div className="row-item">
          classbased
        </div>

        <div className="row-item">
          styled
        </div>
      </div>
    </>
  );
}

export default App;
