
import "./Post.css"

function Post(props){
  return (
    <div className="post">
     
      <p>Id: {props.id}</p>
      <p>Title: {props.title}</p>
      <p>Author: {props.author}</p>      
    </div>
  );
}

export default Post;