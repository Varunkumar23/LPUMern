// Instead of writing the function syntax in the traditional way there is another way to write the function 
//which is called ARROW FUNCTIONS

//Arrow function

const printBill=(txt)=>{
    console.log("------------------");
    console.log("Rs: ",txt);
    console.log("------------------");



}
const printBillforFoodandDrinks=(txt)=>{
    console.log("------------------");
    console.log("Bill for food and drinks");
    console.log("Rs: ",txt);
    console.log("------------------");



}
const printBillforFoodDrinksandClothes=(txt)=>{
    console.log("------------------");
    console.log("Bill for food,drinks and clothes");
    console.log("Rs: ",txt);
    console.log("------------------");



}

// printBill(100);
//=================================================================================>

const calculateFoodBillAmount=(price1)=>{
    return price1*1.05;
}

const calculateClothesBillAmount=(price2)=>{
    return price2*1.12;
}

const calculateDrinksBillAmount=(price3)=>{
    return price3*1.2;
}


// Higher order function
// The function which accepts another function as a paramenter or returns a function
const calculateTotalBill=(f,c,d,cb)=>{
const food=calculateFoodBillAmount(f);
const clothes=calculateClothesBillAmount(c);
const drinks=calculateDrinksBillAmount(d);

const finalamount=food+clothes+drinks;
cb(finalamount);
//here we are passing one function as a paramenter so that based on different items we purchase it will generate different bills
}

calculateTotalBill(100,400,100,printBillforFoodDrinksandClothes);