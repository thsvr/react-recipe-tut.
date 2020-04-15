import React from 'react';
import './App.css';

const App = () => {

  const  APP_ID = '734e3200';
  const APP_KEY = 'b1a351177cadeaae51b332ed3221afaf'

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`


  return (
    <div className="App">
      <h1>Hello React</h1>
    </div>
  );
};


export default App;
