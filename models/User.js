import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    profilepic: {
        type: String,
    },
    coverpic: {
        type: String,
    },
    razorpayid:{
        type: String,
    },
    razorpaysecret: {
        type: String,
    },
    bio: {
        type: String,
    },
    projectTitle: {
        type: String,
    },
    projectDescription: {
        type: String,
    },
    // token: {
    //     type: String,
    //     required: true,
    // },
    // provider: {
    //     type: String,
    //     required: true,
    // },
    // providerId: {
    //     type: String,
    //     required: true,
    // },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    //expriment
    merchandise: [
        {
          imageUrl: String,
          buyLink: String,
          title: String,
          description: String
        }
      ]
      
});

export default mongoose.models.User || model("User", UserSchema);;