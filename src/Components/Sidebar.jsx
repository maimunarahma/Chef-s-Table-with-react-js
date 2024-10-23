/* eslint-disable no-undef */
//  eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// eslint-disable-next-line no-unused-vars
const Sidebar = ({ recipeQueue  ,handlePreparing }) => {
    // console.log(recipeQueue);
    return (
        <div>
      <div className='border-2 p-14'>
        <h2 className='font-bold text-4xl text-center'>Want to Cook</h2>
        <div className=''>
          <div className="overflow-x-auto">
            <table className="table mt-6">
              <thead>
                <tr>
                  <th className="font-semibold text-xl m-4"></th>
                  <th className="font-semibold text-xl m-4">Name</th>
                  <th className="font-semibold text-xl m-4">Preparing Time</th>
                  <th className="font-semibold text-xl m-4">Calories</th>
                  <th className="font-semibold text-xl m-4"></th>
                </tr>
              </thead>
              <tbody>
                {recipeQueue.map((recipes, index) => (
                  <tr key={index} className="bg-base-200 font-bold text-lg">
                    <td>{index + 1}</td> {/* Display the position */}
                    <td className="font-semibold text-xl ">{recipes.recipe_name}</td>
                    <td className="font-semibold text-xl ">{recipes.preparing_time}</td>
                    <td className="font-semibold text-xl ">{recipes.calories}</td>
                    <td>
                      <button className="btn bg-[#0BE58A] mt-4 text-2xl font-semibold" onClick={()=>handlePreparing(recipes[index])}>Preparing</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

<div className='border-2 p-14'>
<h2 className='font-bold text-4xl text-center'>Currently Cooking</h2>
<div className=''>
  <div className="overflow-x-auto">
    <table className="table mt-6">
      <thead>
        <tr>
          <th className="font-semibold text-xl m-4"></th>
          <th className="font-semibold text-xl m-4">Name</th>
          <th className="font-semibold text-xl m-4"> Time</th>
          <th className="font-semibold text-xl m-4">Calories</th>
          <th className="font-semibold text-xl m-4"></th>
        </tr>
      </thead>
      <tbody>
        {recipeQueue.map((recipes, index) => (
          <tr key={index} className="bg-base-200 font-bold text-lg">
            <td>{index + 1}</td> {/* Display the position */}
            <td className="font-semibold text-xl "></td>
            <td className="font-semibold text-xl "></td>
            <td className="font-semibold text-xl "></td>
            <td>
              <button className="btn bg-[#0BE58A] mt-4 text-2xl font-semibold">Preparing</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>
</div>
</div>
    );
  };
  
  export default Sidebar;
  