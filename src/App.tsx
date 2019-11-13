import React from 'react';
import FunctionalToggle from './Components/FunctionalToggle';
import './App.css';

const App = () => {
  return (
    <>
      <h1>Toggle visibility with different type of components</h1>
      <h2>#functional #class #styled</h2>
      
      <div className="container">
        <div className="row-item">
          <FunctionalToggle />
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
