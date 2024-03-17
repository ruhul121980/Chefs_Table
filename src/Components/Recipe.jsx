import React, { useState } from 'react';

export default function Recipe({ recipe, handleClick }) {
    const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories, ingredientsNo } = recipe;

    const [ingre, setIngre] = useState(ingredients);

    return (
        <div> 
            <div className="card w-72 bg-base-100 shadow-xl">
                <figure><img className='w-full m-3 h-48' src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='font-light'>{short_description}</p>
                    <h2 className="card-title">Ingredient: {ingredientsNo}</h2>
                    <ul>
                        {ingre.map((ing, index) => (
                            <li key={index}>{ing}</li>
                        ))}
                    </ul>
                    <div className='flex'>
                      <p className='font-light'>{preparing_time}</p>
                      <p className='font-light'>{calories}</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handleClick(recipe_name, preparing_time, calories)} className="w-32 h-7 text-sm font-extrabold bg-[#0BE58A] rounded-lg">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
