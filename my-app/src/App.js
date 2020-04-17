import React, {useEffect, useState}  from 'react';
import './App.css';

const App = () => {
  const  APP_ID = '734e3200';
  const APP_KEY = 'b1a351177cadeaae51b332ed3221afaf';

  const [recipes, setRecipes] = useState([]);
  
  useEffect( () =>{
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"></input>
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};


export default App;
