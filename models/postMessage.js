import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    likes: {
        type: [String],
        default: []
    },
    selectedFile: {
        type: String,
        default: "ajay",
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    creatorId: {
        type: String,
        default: 'ajay'
    },
    imgUrl: 
    {
        type: String
    }

})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;