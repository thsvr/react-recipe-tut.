import React from 'react';

const Recipe = ({title, calories, image, ingredients}) => {
  return (
    <div>
      <h1>{title}</h1>      
      <img src={image} alt="#"/>
      <ol>
        {ingredients.map(ingredients =>(
          <li>{ingredients.text}</li>
        ))}
      </ol>

      <p>{calories}</p>
    </div>
  );
};

export default Recipe;