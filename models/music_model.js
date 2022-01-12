const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    music_id:{
        type: String,
    },
    music_name:{
        type: String,
    },
    music_author:{
        type:String,
    },
    music_url:{
        type:String
    }
},{timestamps: true});

UserSchema.methods.toJSON = function () {
    const music = this.toObject();
    delete music.createdAt;
    delete music.updatedAt;
    delete music.__v;

    return music;
}

module.exports = mongoose.model('Music',UserSchema);