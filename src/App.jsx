import Foods from "./Components/Foods/Foods";
import './App.css'
import { useState } from "react";
import Sidebar from "./Components/Sidebar";

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [recipeQueue, setRecipeQueue] = useState([]);
  // const [selectedRecipe, setSelectedRecipe] = useState([]); 
  const addRecipeQueue = (food) => {
    console.log(food);
    // eslint-disable-next-line no-unused-vars
    const isExist=recipeQueue.find(previousRecipe=>previousRecipe.recipe_id===food.recipe_id)
    if(!isExist){
      setRecipeQueue([...recipeQueue,food])
    }
    else{
      alert("Recipe Already Exists in Queue")
    }
    // setSelectedRecipe(food);
  };
    
      // eslint-disable-next-line no-unused-vars
      const [preparing, setPreparing]=useState([])
      // eslint-disable-next-line no-unused-vars
      const handlePreparing=(food)=>{
        const isExist=recipeQueue.find(previousRecipe=>previousRecipe.recipe_id===food.recipe_id)
        if(!isExist){
           setPreparing([...preparing, food])}
           else{
            alert("Recipe Already Cooking")
          }
      }
    
  console.log(preparing)
  return (
  <div>
             <div className="navbar bg-base-100 mx-auto px-0">
  <div className="navbar-start">
    <div className="dropdown">
      <div  role="button" className="btn btn-ghost lg:hidden">
        
        
      </div>
      <ul
     
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl font-bold">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
           <li><a>Home</a></li>
      
            <li><a>Reciepe</a></li>
            <li><a>About</a></li>
             <li><a>Search</a></li>
             </ul>
  {/* <i class="fa-solid fa-magnifying-glass"></i> */}
  </div>
  <div className="navbar-end">
  <input type="text" className=" p-4 m-5 rounded-lg fa-solid fa-magnifying-glas" placeholder=" Search" />
    <button className="rounded-full bg-green">
    <i className="fa-solid fa-user rounded-full"></i>
    </button>
   
  
  </div>
</div>
    <header  className=" ">
      <div className="flex flex-col justify-between items-center banner p-8">
      <h1 className="text-center text-white pt-5 font-extrabold text-4xl ">Discover an exceptional cooking class tailored for you!</h1>
        <p className="text-center text-white text-lg ">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
      </div>
    </header>
  <div className="flex justify-between items-center">   
     <Foods addRecipeQueue={addRecipeQueue}></Foods>
     <div className="w-1/3">
     <Sidebar recipeQueue={recipeQueue}  handlePreparing={handlePreparing} />
     </div>
    
    </div>
    </div>
  );
};

export default App;