const arr=[1,2,3,4,5,6,7,8,9,10];

// for(let i=0;i<arr.length;i++){
// const ans=arr[i];
// console.log(ans,i);
// }


//we have to try to  avoid this method 
// for(let i in arr){
//     const ans=arr[i];
//     console.log(ans,i);
// }

// for(let i of arr){
//     const ans=arr[i];
//     console.log(ans,i);
// }


const myfunc=(value,index,array)=>{
    console.log("Index: ",index,"Value:",value)
}

arr.forEach(myfunc);