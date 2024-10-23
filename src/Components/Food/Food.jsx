

// eslint-disable-next-line react/prop-types
const Food = ({ food ,addRecipeQueue }) => {
    // eslint-disable-next-line react/prop-types
    const {recipe_name,image, short_description ,ingredients, preparing_time ,calories}=food;
   
    
    return (
       
        <div className="food-container  gap-3  border-2 rounded-xl px-10 py-5" >
         
         
          
           <img src={image} alt="" className="w-[250px] h-[200px] rounded"/>
           <h3 className="font-bold text-xl ">{recipe_name}</h3>
           <p>{short_description}</p>

           <div className="mt-4">
            <h4 className="font-bold text-lg mb-3">Ingrediants : {ingredients.length}</h4>
            <ul className="list-disc list-inside text-black mb-3">
                {ingredients.map( (ingrid,index) =>
                    
                        <li key={index}>{ingrid}</li>
                 
                )}
                
            </ul>
           </div>
           <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-3">
                <h3><i className="fa-solid fa-clock"></i> {preparing_time}</h3>
            </div>
            <div className="flex justify-between items-center gap-3">
            <i className="fa-solid fa-fire"> </i><h3>{calories}</h3>
            </div>
           </div>
        
        <button className="btn bg-[#0BE58A] mt-4" onClick={()=>addRecipeQueue(food)}>Want to Cook</button>
      
          </div>
        
    );
};

export default Food