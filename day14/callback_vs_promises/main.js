const{cFetch}=require("./network-helper")

const getRecipes=async()=>{
    try{

        const response=await fetch("")
        const data=response.json();
        console.log("Total recipes ------>",data.total)
    } catch(err){
        console.log("Error Occured while fetching the recipes",err.message)
    }
}


const getProducts=async()=>{
    try{

        const response=await fetch("")
        const data=response.json();
        console.log("Total recipes ------>",data.total)
    } catch(err){
        console.log("Error Occured while fetching the Products",err.message)
    }
}