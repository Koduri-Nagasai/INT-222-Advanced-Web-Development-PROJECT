import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://nagasaikoduri:Nagasai2003@cluster0.iukwg1u.mongodb.net/food-del').then(()=>console.log("DB Connected"))
    //await mongoose.connect('mongodb://localhost:27017').then(()=>console.log("DB Connected"))
}

