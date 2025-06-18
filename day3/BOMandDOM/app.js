// console.log("Windows:",window)
// console.log("Document:",window.document)

// console.log(window.document);

// console.dir(window.document.children[0].children[1].children[0].innerHTML);

//===================================================================================================================>

// 1. document.getElementsByTagName

// const headings = document.getElementsByTagName("h3");
// console.log(headings);

// const header = document.getElementsByTagName("header");
// console.log(header);

// headings[0].innerText = "Good Morning";
// headings[1].innerText = "Good Morning";

// =====================================================================================================================>
// 2.  document.getElementsByClassName

// const elements = document.getElementsByClassName("text-brown");
// console.log(elements);

// elements[0].style.color = "blue";
// elements[1].style.color = "red";

//=================================================================================================================>

// 3. document.getElementById

// const text = document.getElementById("text-1");
// text.style.backgroundColor = "grey";

//==============================================================================================================>

// 4. document.querySelectorAll this gives all the selectors that are present on the web page

const helo = document.querySelectorAll("h3");
console.log(helo);

// 5. document.querySelector  this will give only the first selector that encounters by the compiler

const firstDiv = document.querySelector("div");

