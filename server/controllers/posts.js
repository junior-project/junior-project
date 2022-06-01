import PostBlog from "../models/postBlog.js"

export const getPosts = async (req, res) => {
    try {
        const postBlog= await PostBlog.find();

         console.log(postBlog)
         res.status(200).json(postBlog)
    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

export const createPost = async (req,res)=>{
const post = req.body;
const newPost = new PostBlog(post) ;
    try {
        await newPost.save()
        res.status(201).json(newPost)
        
    } catch (error) {
        res.status(409).json({message:error.message})
    }

}