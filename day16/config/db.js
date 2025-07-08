const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://varunkumar:viratkohli18@cluster0.ka0yv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  {
    dbName:"day16"
  }
).then(()=>{
    console.log("Database is Connected Successfully ✅")
    
}).catch((err)=>{
    console.log("Database Connection Error ❌",err.message);

})
