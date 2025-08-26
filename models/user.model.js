import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [3, "username must be 3 char long"]
    },

    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true,
        minlength: [5, "email must be 5 char long"]
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, "password must be 5 char long"]
    }
});

// here "user" is collectiuons name
const userModel = mongoose.model("user", userSchema);

export default userModel;