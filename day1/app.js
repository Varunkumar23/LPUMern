window.console.log("Hello World!");

// console.log(age);

// var age=22;
// console.log(age);

// var age=23;
// console.log(age);


// let age=10;

// console.log(age);
// let age=16;
// age=100;
// console.log(age);

// let x=12;
// let y='a';
// console.log(x-y);


// let a="varun";
// let b=" kumar";
// console.log(a+b);

// console.log(1-1);
// console.log('a'-1);
// console.log(1-'a');
// console.log('1'-'a');

// console.log(1*1);
// console.log('a'*1);
// console.log(1*'a');
// console.log('1'*'a');

// console.log(1/1);
// console.log('a'/1);
// console.log(1/'a');
// console.log('1'/'a');


// =========================================================================

// basic calculations

// let Juice=50;
// let gstOnJuice=0.1;
// let fries=70;
// let gstOnFood=0.05;

// let JuiceBill=Juice+Juice*gstOnJuice;
// let friesBill=fries+fries*gstOnFood;

// const finalbill=JuiceBill+friesBill;
// console.log("finalbill:",finalbill);


// =============================================================================
//1. Function Declaration(without parameters and argumenta)

// console.log("START");
// function calculateJuiceBill(){
//     let Juice=50;
//     let gst=0.1;
//     let JuiceBill=Juice+Juice*gst;
//     console.log("JuiceBill: ",JuiceBill);
// }

// console.log("MID");
// calculateJuiceBill();
// calculateJuiceBill();
// calculateJuiceBill();
// console.log("END");



//2. Function Declaratin(with parameters and arguments)
// console.log("START");
// function calculateJuiceBill(Juice,gst){
//     // let Juice=50;
//     // let gst=0.1;
//     let JuiceBill=Juice+Juice*gst;
//     console.log("JuiceBill: ",JuiceBill);
// }

// console.log("MID");
// calculateJuiceBill(10,0.1);
// calculateJuiceBill(20,0.2);
// calculateJuiceBill(30,0.3);
// console.log("END");


//================================================================================

// function printbill(name,amount){
//     console.log("-------------------");
//     console.log("Your bill for",name);
//     console.log("Rs.",amount);
//     console.log("-------------------");
// }

// function calculatebillamount(price,gst){
//     console.log("---calculating---");
//     let billamount=price+price*gst;
//     return billamount;
    
// }

// let res1=calculatebillamount(60,0.1);
// printbill("Mango Juice",res1);

// let res2=calculatebillamount(70,0.1);
// printbill("Mango Juice",res2);

// let res3=calculatebillamount(80,0.1);
// printbill("Mango Juice",res3);

//================================================================================

//3.Function assignment (named functions) we will assign functions to the variables directly
//to reduce redeclarations or for any security purpose in future!


// const printbill=function (name,amount){
//     console.log("-------------------");
//     console.log("Your bill for",name);
//     console.log("-------------------");
//     console.log("Rs.",amount);
// }

// const calculatebillamount=function (price,gst){
//     console.log("---calculating---");
//     let billamount=price+price*gst;
//     return billamount;
    
// }

// let res1=calculatebillamount(60,0.1);
// printbill("Mango Juice",res1);

// let res2=calculatebillamount(70,0.1);
// printbill("Grape Juice",res2);

// let res3=calculatebillamount(80,0.1);
// printbill("Orange Juice",res3);



