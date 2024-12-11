import { createContext, useReducer } from "react";

const PostListContext = createContext({
    postList: [],
    addPost: () => {},
    deletePost: () => {}
});
const DEFAULT_POST_LIST=[{
    id:"1",
    title:"Trip",
    body:"I am going to trip",
    userid:"user-1",
    reactions:2,
    tags:["enjoy","Trip","Masti"]
},
{
    id:"2",
    title:"Home",
    body:"I am going to my home",
    userid:"user-2",
    reactions:10,
    tags:["enjoy","holiday","food"]
}]
const postListReducer = (currentList, action) => {
    let newPostList=currentList;
    if(action.type==="DELETE_POST"){
        newPostList=currentList.filter((post)=>
            post.id!==action.payload.postId);
    }
    else if(action.type==="ADD_POST"){
        newPostList=[action.payload,...currentList,]
    }
   return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

    const addPost = (userId,postTitle,postContent,tags) => {
        dispatchPostList({
            type:"ADD_POST",
            payload:{
                id:Date.now(),
                title:postTitle,
                body:postContent,
                userid:userId,
               
                tags:tags
            }
        })
    };

    const deletePost = (postId) => {
        dispatchPostList({
            type:"DELETE_POST",
            payload:{
                postId:postId,
            },
        })
    };

    return (
        <PostListContext.Provider value={{ postList, addPost, deletePost }}>
            {children}
        </PostListContext.Provider>
    );
};

export default PostListProvider;
export { PostListContext };
