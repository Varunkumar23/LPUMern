const title = document.createElement("h1");

const parent = document.getElementById("root");
parent.append(title);
title.innerText = "Proteas!";

const title2 = document.createElement("h1");
parent.prepend(title2);
title2.innerText = "World Test Champions 2025!";
title2.style.textDecoration="underline wavy red";
title.style.textDecoration="underline wavy red";

// basically this is mean by we are creating a h1 element and we are accessing div by element id and we are apending the h1 title to the div whichh wil display on

//append last 
// prepend adds in the first 


//=============================================================================================================>