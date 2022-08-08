/* once we done creating database we can start creating routes for our backend application
// here we add all the routes that have to do with posts
*/
import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js';
 
//setup our router
const router = express.Router(); 
//our first route; the path is just gonna be /; req, res will be same for every router fuunction we create
router.get('/', getPosts);
router.post('/', createPost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);
// export that router and go in index.js and import  router there.
export default router;

//implementing the update routes
router.patch('/:id', updatePost) // patch is used for updating existing dicuments
