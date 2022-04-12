import React, {useState} from 'react';
import Post from "../Post/Post";

const Posts = (props) => {
    const postList = props.posts.map(p=> <Post id={p.id} title= {p.title} author={p.author}/>);
    return (
        <div >
            <div className="posts">
                {postList}
            </div>

        </div>
    );
};

export default Posts;