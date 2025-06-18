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

// =====================================================================================================================>
// 2.  document.getElementsByClassName

const elements = document.getElementsByClassName("text-brown");
console.log(elements);

elements[0].style.color = "brown";

//=================================================================================================================>

// 3. document.getElementById

const text = document.getElementById("text-1");
text.style.backgroundColor = "red";

//==============================================================================================================>

// 4. document.querySelectorAll

const helo = document.querySelectorAll("div");
console.log(helo);

// 5. document.querySelector
