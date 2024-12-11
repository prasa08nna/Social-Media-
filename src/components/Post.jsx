import { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { PostListContext } from "../store/post-list-store";
// 
// import { PostListContext } from "../store/post-list-store";

const Post=({post})=>{
  const{deletePost}=useContext(PostListContext);
    return(
        <>
  <div className="card  mypost" style={{width: "28rem"}}>
 
  <div className="card-body">
    <h5 className="card-title">{post.title}
      <span   className="position-absolute top-0 start-100 translate-middle  mydlticon" onClick={()=>deletePost(post.id)}>
      <TiDelete />
    
  </span></h5>
    <p className="card-text">{post.body}</p>
   { post.tags.map((tag)=>{
        return <span key={tag} className="badge text-bg-primary mytags" >{tag}</span>
    })
  }
  {/* <div className="alert alert-success myreactions" >
  This Post has been reacted by {post.reactions} people
</div> */}
    
   
  </div>
</div>
</>
    );
}
export default Post;