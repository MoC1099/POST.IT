import mongoose from 'mongoose';

/*
creating mongoose scheema
this is a functions that is going to have obj in there immediately
what is schema?
with MongoDB you can create documents that look absolutely different
one can have a title and message one can have a message only... etc
*/
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    tags: String,
    creator: String,
    tags: [String],
    selectedFile: String, // we're going to convert an image into a string using base64
likeCount: {
    type: Number,
    default: 0
},
createdAt: {
    type: Date,
    default: new Date()
}
});
/* 
now that we have created a schema we have to turn it into a model
we're exporting a mongoose model from a PostMessage file
and then on that model we're going to be able to run commands
such as find, create, delete and update
*/
const PostMessgae = mongoose.model('PostMessage', postSchema);
export default PostMessgae;
