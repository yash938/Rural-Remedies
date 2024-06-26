const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    userid : {
        type : Schema.Types.ObjectId,
        ref : "User",
    },
    title : {
        type : String,
        require : true
    },
    description : String,

    recipe : String,
    
    image : {
        type : String,
        default : "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        set : (v) => v === "" ? "https://plus.unsplash.com/premium_photo-1680300960892-bd11b59b469b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" : v
    },
    
    
    verified : {
        type : Boolean,
        default : false,
    }
})

module.exports = mongoose.model("listing" , listingSchema);