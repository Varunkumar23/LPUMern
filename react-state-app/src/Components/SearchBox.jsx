import { useState } from "react";

const SearchBox=()=>{
    let searchText="Varun!";

    const[monitor,remote]=useState();
    const handleSearch=(e)=>{
        // console.log(e);
        // console.log(e.target.value);
        searchText=e.target.value;
        // console.log(searchText);
        console.log(monitor);

    }

    return(
<div>
    <input type="text" onKeyUp={handleSearch} placeholder="Search amazon.in"></input>
    <button>search</button>
</div>
    )
}

export{
    SearchBox
};

