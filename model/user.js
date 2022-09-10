import mongoose from 'mongoose';


// how our document look like
const userSchema = mongoose.Schema({
    title: String,
    message: String,
    
}, {timestamps:true})



// we need to turn it into a model
const postUser = mongoose.model('user', userSchema);

export default postUser;