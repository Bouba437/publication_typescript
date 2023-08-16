import { useState, useEffect } from 'react';
import { PostsData } from '../interfaces';
import PostsList from '../components/PostsList';
import './posts.css';


const Posts: React.FC = () => {
    const [allPosts, setAllPosts] = useState<PostsData[] | null>(null);
    const [numberOfPosts, setNumberOfPosts] = useState<number>(5)  
    
    const loalOrStateNumber = () => localStorage.getItem("number") || numberOfPosts;
    const loalOrStateNum = loalOrStateNumber()

    useEffect(() => {
        const getPosts = async () => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${loalOrStateNum}`);
            const data: PostsData[] = await response.json();
            setAllPosts(data);       
        };
        getPosts();
    }, [loalOrStateNum])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNumberOfPosts(+e.target.value);
        localStorage.setItem("number", e.target.value)
    }

    return (
        <div className="post-container">
            <h1>Page principale</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <label htmlFor="posts">Nombre de publication {loalOrStateNum}</label>
                <input 
                    type="range" 
                    min={1} 
                    max={20}
                    onChange={handleInputChange}
                    defaultValue={loalOrStateNum}
                />
                <PostsList allPosts={allPosts} />
            </div>
        </div>
    )
}

export default Posts