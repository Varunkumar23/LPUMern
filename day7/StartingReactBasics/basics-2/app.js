
// in this file we are using jsx with the help of babel which will be easy to code and developer experience
const domRoot=document.getElementById("root")
const reactRoot=ReactDOM.createRoot(domRoot);

// reactRoot.render(
//     <div>
//         <h1>Hello!</h1>
//         <div>
//             <p>
//                 Good Morning!
//             </p>
//             <ul>
//                 <li>Apple</li>
//                 <li>Mango</li>
//                 <li>Orange</li>
//             </ul>
//         </div>
//     </div>
// );

// ==========================================================================================>
    //without reuse
// const Card1=(
//     <div className="card">
//         <h1>Title 1</h1>
//         <p>Description 1</p>
//     </div>
// );

// const Card2=(
//     <div class="card">
//         <h1>Title 2</h1>
//         <p>Description 2</p>
//     </div>
// );

// const container=(
//     <div>
//         {Card1}
//         {Card2}
//     </div>
// )
// reactRoot.render(container);

// ========================================================================>

    //with reuseability

const Card1=(obj)=>{
    return(
<div className="card">
         <h1>{obj.title}</h1>
         <p>Description 1</p>
    </div>
    );
}

const container=(
    <div>
        {/* {Card1({title:"Hello"})}  we can use this also   */}
        {/* <Card1 title="Telangana"/>  but this is -refered */}
        <Card1 title="Maharastra"></Card1>
        <Card1 title="Karnataka"/>
        <Card1 title="Andhra Pradesh"/>
    </div>
)
reactRoot.render(container);


