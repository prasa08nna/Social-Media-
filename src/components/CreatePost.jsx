import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

const CreatePost=()=>{
  const {addPost}=useContext(PostListContext);
    const userIdElement=useRef();
    const postTitleElement=useRef();
    const postContentElement=useRef();
    const tagsElement=useRef();

    const handleSubmit=(e)=>{
      e.preventDefault();
      const userId=userIdElement.current.value;
      const postTitle=postTitleElement.current.value;
      const postContent=postContentElement.current.value;
      const tags=tagsElement.current.value.split(" ");
      addPost(userId,postTitle,postContent,tags);
      userIdElement.current.value="";
      postTitleElement.current.value="";
      postContentElement.current.value="";
      tagsElement.current.value="";
    }
    return(
        <>
        <form className="create-post" onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="userID" className="form-label">User ID</label>
    <input type="text" ref={userIdElement} className="form-control" id="userid" placeholder="Enter User ID"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder="Enter the Post Title"/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Content</label>
    <textarea type="text"row="4" ref={postContentElement} className="form-control" id="content" placeholder="Enter the Post Content "/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder="Enter Tags here"/>
   
  </div>
 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
</>
    );
}
export default CreatePost;