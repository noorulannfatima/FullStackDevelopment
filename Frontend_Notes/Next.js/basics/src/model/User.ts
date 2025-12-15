import mongoose, { Schema, Document } from "mongoose";

// importing Document for type safety

export interface message extends Document {
    message: string;
    createdAt: Date;
}

const MessageSchema: Schema<message> = new Schema({
    message: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
});

export interface User extends Document {
    username: string;
    email: string;
    password: string;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isAccountVerified: boolean;
    isAcceptingMessages: boolean;
    messages: message[];
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        match: [ /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter a valid email address"]
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
    verifyCode: {
        type: String,
        required: [true, "Verify code is required"],
    },
    verifyCodeExpiry: {
        type: Date,
        required: [true, "Verify code expiry is required"],
    },
    isAccountVerified: {
        type: Boolean,
        default: false,
    },
    isAcceptingMessages: {
        type: Boolean,
        default: true,
    },
    messages: [MessageSchema],
});

const UserModel = 
( mongoose.models.User as mongoose.Model<User> ) 
|| 
mongoose.model<User>("User", UserSchema);

// it runs in edge time so its better to compare if our model already exists or not

export default UserModel;
