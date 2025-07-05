import { useState } from "react";

// function re-run ==>component re-rendering
//react re-renders component EITHER on state change or on props change

const App = () => {
  // const [stateVariable, setStateFunction] = useState("Varun");

  // const handleSearch=(e)=>{
  //     setStateFunction(e.target.value)
  //   }
  //   return(
  //     <div>
  //       <h1>Type SomeThing here</h1>
  //       <input type="text" onKeyUp={handleSearch} />
  //       <h1>Hello {stateVariable}</h1>
  //     </div>
  //   )

  //number counter========================================================================>
  // const [value,changevalue]=useState(10);

  // return(
  //   <div>
  // <h1>{value}</h1>
  // <button onClick={()=>changevalue(value+1)}>+</button>
  // <button onClick={()=>changevalue(value-1)}>-</button>
  // <button onClick={()=>changevalue(0)}>Reset</button>
  // </div>
  // )

  //==============================================================================================>

  // when we are dealing with the updating the value multiple time in a one go
  // const [monitor, remote] = useState(0);
  // // console.log(monitor);
  // const handleClick = () => {
  //   remote((prev) => {
  //     return prev + 1;
  //   });
  //   remote((prev)=>{
  //     return prev+1;
  //   })
  //   console.log(monitor)
  // };

  // return (
  //   <div>
  //     <button onClick={handleClick}>Click me</button>
  //     <h2>{monitor}</h2>
  //   </div>
  // );

  //================================================================================================================>
  //////// to store the value in the local storage
  // to check this we have to inspect->application->localstorage

  // const[monitor,remote]=useState(()=>{
  //   const val=localStorage.getItem("counter-value");
  //   if(val){
  //     return Number(val);
  //   }else{
  //     return 0;
  //   }
  // });
  // console.log(monitor)
  // const handleClick=()=>{
  //   remote((prev)=>{
  //     const newValue=prev+1;
  //     localStorage.setItem("counter-value",newValue);
  //     return newValue;
  //   })

  // }

  // return(
  //   <div>
  //     <button onClick={handleClick}>Click me</button>
  //     <h2>{monitor}</h2>
  //   </div>
  // )

  //increment and decrement and reset and storing them in a local storage

  // const [monitor,remote ] = useState(()=>{
  //     const val= localStorage.getItem("counter-value");
  //     if(val){
  //       return parseInt(val);
  //     }
  //     else{
  //       return 0;
  //     }
  //   });
  //   console.log(monitor);
  //   const handleClicki= () => {
  //     remote((prev)=>{
  //       const newValue = prev+1;
  //       localStorage.setItem("counter-value",newValue);
  //       return newValue;
  //     });
  //   };
  //   const handlereset=()=>{
  //     remote(()=>{
  //       const newValue = 0;
  //       localStorage.setItem("counter-value",newValue);
  //       return newValue;
  //     })
  //     // remote(0);
  //     // localStorage.setItem("counter-value",0);
  //   }
  //   const handleClickd=()=>{
  //     remote((prev)=>{
  //       const newValue = prev-1;
  //       localStorage.setItem("counter-value",newValue);
  //       return newValue;
  //     });
  //   }

  //   return(
  //     <div>
  //       <button onClick={handleClicki}>++</button>
  //       <button onClick={handleClickd}>--</button>
  //       <button onClick={handlereset}>reset</button>

  //       <h2>{monitor}</h2>
  //     </div>
  //   );

  // storing the name and displaying the same even if it refresh
  // const [searchText,setSearchText]=useState(()=>{

  //   const val=localStorage.getItem("Name");
  //   if(val){
  //     return val;
  //   }else{
  //     return undefined;
  //   }

  //   // return "Varun!";

  // })
  // console.log(searchText);

  // const handleSearch=(e)=>{
  //   setSearchText((name)=>{
  // name=e.target.value;
  // localStorage.setItem("Name",name);
  // return name;
  //   })

  // }

  // return(
  //   <div>
  //     <input type="text" onKeyUp={handleSearch}/>
  //     <h1>{searchText}</h1>
  //   </div>
  // )

  /// INstead of using onkeyup and onkeydown in react we will use onChange
  //and we stored the value in the localstorage as well so when we refresh the website also we will not lost the value

  // const [searchText,setSearchText]=useState(()=>{
  //   const Text=localStorage.getItem('val')
  //   if(Text){
  //     return Text;
  //   }else{
  // return "Varun!"
  //   }

  // })
  // console.log(searchText);

  // const handleSearch=(e)=>{
  //   const val=e.target.value;
  //   localStorage.setItem("val",val)
  //   setSearchText(val);

  // }

  // return(
  //   <div>
  //     <input type="text" onChange={handleSearch}/>
  //     <h1>{searchText}</h1>
  //   </div>
  // )

  //============================================================================================================>

  //Dealing with objects

  //   const [arr, setArr] = useState(["kiwi", "banana"]);

  //   const handleFruit = () => {
  //     const temp = [...arr]; //copying the arr into the temp
  //     temp.push("Mango");
  //     setArr(temp);
  //   };
  //   return (
  //     <div>
  //       <ol>
  //         {arr.map((elem) => {
  //           return <li>{elem}</li>;
  //         })}
  //       </ol>
  //       <button onClick={handleFruit}>Add Mango</button>
  //     </div>
  //   );
};

export default App;
