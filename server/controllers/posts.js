/* 
the controller folder if for the backeng programming
here we are going to put all the handlers for our routes from posts.js in server
nimplementing real logic for getting and creating posts.
this is a good habbit as it will make our routes on server.js look more clean.
*/
import PostMessage from '../models/postMessage.js';
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {
    try {
        // lets try to retrieve all the posts that we currently have in database
         const postMessages = await PostMessage.find();
         res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
/* 
with post request you have access to request.body you need a body to make a post so we need to work on front end now so we goto client site 
*/
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new PostMessage(post);
    try {
        await newPost.save();
        res.status(201).json(newPost); // 201 means successful
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

// update post using the patch created in routes->posts
export const updatePost = async (req, res) => {
    const { id: _id} = req.params;
    const post = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${id}`);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true });
    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await PostMessage.findByIdAndRemove(id);
    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const post = await PostMessage.findById(id);
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    res.json(updatedPost);
}


