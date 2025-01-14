import { useContext } from "react";
import Post from "./Post";
import { PostListContext as PostListData} from "../store/post-list-store";
const PostList=()=>{
    const{postList}=useContext(PostListData);
    
    return(
        <>
        {postList.map((post)=>{
           return <Post key={post.id} post={post}/>
        })}
        </>
    )
}
export default PostList;