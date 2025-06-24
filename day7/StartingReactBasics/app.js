
// console.log("hello from day7")

// const root=document.getElementById("root")
// const div=document.createElement("div")
// div.innerHTML=`
// <ul>
// <li>Item 1</li>
// <li>Item 2</li>
// </ul>
// `
// root.append(div)

// =============================================================================
//this is bu dom 

// const root=document.getElementById("root")

// const item1=document.createElement("li")
// item1.innerText="Item 1"
// const item2=document.createElement("li")
// item2.innerText="Item 2"

// const list=document.createElement("ul")

// list.appendChild(item1)
// list.appendChild(item2)

// root.append(list)

//=======================================================================================

// const item1=React.createElement("li",{},"Item 1")
// const item2=React.createElement("li",{},"Item 2")
// const list=React.createElement("ul",{},[item1,item2])

// const rootElem=document.getElementById("parent");

// const reactRoot=ReactDOM.createRoot(rootElem);
// reactRoot.render(list); 

//==========================================================================


const item1=<li>Item 1</li>
const item2=<li>Item 2</li>

const list=(
<ul>
    {item1} {item2}
</ul>
);

const rootElem=document.getElementById("parent");

const reactRoot=ReactDOM.createRoot(rootElem);
reactRoot.render(list); 