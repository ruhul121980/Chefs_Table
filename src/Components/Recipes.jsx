import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipe from './Recipe';
let count=0;

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [wantcook, setWantcook] = useState([]);
  const [wantcook1, setWantcook1] = useState([]);
  const [wantcook2, setWantcook2] = useState([]);
  const [clickedRecipes, setClickedRecipes] = useState([]);

  useEffect(() => {
    fetch('recipe.json')
      .then(res => res.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipe:', error));
  }, []);

  const handleClick = (recipe_name, preparing_time, calories) => {
    count++;
    if (clickedRecipes.includes(recipe_name)) {
      toast.warn(`You've already clicked ${recipe_name}!`);
    } else {
      setClickedRecipes([...clickedRecipes, recipe_name]);

      const newWantCook = [...wantcook, recipe_name];
      setWantcook(newWantCook);

      const newWantCook1 = [...wantcook1, preparing_time];
      setWantcook1(newWantCook1);

      const newWantCook2 = [...wantcook2, calories];
      setWantcook2(newWantCook2);
    }
  };

  return (
    <div className='flex mt-3'>
      <div className='grid grid-cols-2 w-2/3'>
        {recipes.map(recipe => (
          <Recipe key={recipe.recipe_id} recipe={recipe} handleClick={handleClick} />
        ))}
      </div>
      <div className='ml-10 w-1/3 ml-24'>
     <h1 className='text-center'> Want to cook: {count}</h1>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name: </th>
              <th>Time: </th>
              <th>Calories: </th>
            </tr>
          </thead>
          <tbody>
            {wantcook.map((flag, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{wantcook[index]}</td>
                <td>{wantcook1[index]}</td>
                <td>{wantcook2[index]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}
