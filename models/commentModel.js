const mongoose = require("mongoose")
const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        require: true
    },
    post: {
        type: mongoose.SchemaTypes.ObjectId,
        refs: "blog"
    },
}, {timestamps: true})

const comment = mongoose.model("comments", commentSchema)
module.exports = comment