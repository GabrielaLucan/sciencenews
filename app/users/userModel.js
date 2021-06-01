import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    createdAt: Number,
    updatedAt: Number,
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique:true
    },
    country: {
        type: String,
        required: true

    }, city: {
        type: String,
        required: true
    },
    address: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    affiliation: {
        type: String,
    },
}, {
    timestamps: { currentTime: () => new Date().getTime() },
});

userSchema.methods.isValidPassword = async function (password) {
    return password == this.password;
  };

  
export default mongoose.model('User', userSchema);
