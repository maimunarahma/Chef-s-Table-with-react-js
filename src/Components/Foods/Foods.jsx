import { useEffect, useState } from "react";
import Food from "../Food/Food";

// eslint-disable-next-line react/prop-types
const Foods = ( { addRecipeQueue }) => {
    const [foods,setFoods]=useState([])
    useEffect(()=>{
        fetch(`Recipes.json`)
        .then(res => res.json())
        .then(data=> setFoods(data))
    },[])

    return (
        <section className="flex flex-col md:flex-row justify-between items-center gap-3 mx-auto p-5  ">
    <div className="grid grid-cols-2 md:grid-cols-2 gap-5">
          {foods.map(food => <Food key={food.recipe_id} food={food} addRecipeQueue={addRecipeQueue}></Food>)
        }
        </div>
      
   </section>
    );
};

export default Foods;