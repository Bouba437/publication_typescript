import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { PostsData } from "../interfaces";
import PostDetail from '../components/PostDetail';
import './post.css'

type PostParams = {
    id: string
}

const Post: React.FC = () => {
    const {id} = useParams<PostParams>();

    const [onePost, setOnePost] = useState<PostsData | null>(null);
    console.log(onePost);
    

    useEffect(() => {
        const getPost = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await response.json();
            setOnePost(data);
            
        };
        getPost();
    }, [id])
    
    return (
        <div className="post-container">
            <h1>Détail de la publication</h1>
            <PostDetail onePost={onePost} />
        </div>
    )
}

export default Post;