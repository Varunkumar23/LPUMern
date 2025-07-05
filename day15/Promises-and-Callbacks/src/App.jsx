import "./App.css";
import { useState,useEffect } from "react";

function App() {
  const [recipeArr, setRecipeArr] = useState([]);
  const getData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      console.log(data.recipes);
      setRecipeArr(data.recipes);
    } catch (err) {
      alert(`Api Error ${err.message}`);
    }
  };

useEffect(()=>{
  getData();
},[]);
  
  return (
    <>
{
  recipeArr.map((elem,idx)=>{
    return(
      <div key={elem.id}>
        <p>{elem.name}</p>
        <p>{elem.cusine}</p>

      </div>
    )
  })
}    </>
  );
}

export default App;
