import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true},
    email: {type: String, required: true},
    phone: { type: String, required: true},
    address: String,
    createdAt: {type: Date, default: Date.now}
})

const Users = mongoose.model('User', userSchema);

export default Users;