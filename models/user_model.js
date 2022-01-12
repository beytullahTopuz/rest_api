const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    user_id:{
        type: String,
    },
    user_name:{
        type: String,
    },
    user_email:{
        type: String,
    }, 
    user_password:{
        type: String,
    }

}, {timestamps: true });

UserSchema.methods.toJSON = function () {
    const user = this.toObject();
    delete user.createdAt;
    delete user.updatedAt;
    delete user.__v;
    delete user.user_password;

    return user;
}


module.exports = mongoose.model('User', UserSchema);