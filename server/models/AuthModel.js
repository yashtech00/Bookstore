import mongoose from "mongoose"

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique
    },
    password: {
        type: String,
        required: true
    }
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;