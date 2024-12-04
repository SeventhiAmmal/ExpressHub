import mongoose from "mongoose";

const userData = new mongoose.Schema ({
    
    userName : {
        type : String,
        required : true
    },
    userEmail : {
        type : String,
        required : true
    },
    userAddress : {
        type : String,
        required : true
    }
})

const Users = mongoose.model("users", userData); // Collection name is explicitly set to "users"
export default Users;