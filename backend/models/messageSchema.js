import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is mandatory"],
        minLength: [3, "Name must be atleast 3 characters."],
    },
    email: {
        type: String,
        required: [true, "E-Mail is mandatory"],
        validate: [validator.isEmail, "Please provide a valid email."],

    },
    subject: {
        type: String,
        required: [true, "Subject is mandatory"],
        minLength: [5, "Subject must be atleast 5 characters."],
    },
    message: {
        type: String,
        required: [true, "Message cannot be Empty"],
        minLength: [10, "Message must be atleast 10 characters."],
    },
});

export const Message = mongoose.model("Message", messageSchema);