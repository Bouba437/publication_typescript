import { useNavigate } from 'react-router-dom';
import { PostsData } from '../interfaces';
import './postsList.css';

interface PostsListProps {
    allPosts: PostsData[] | null
}

const PostsList: React.FC<PostsListProps> = ({allPosts}) => {
    const navigate = useNavigate();

    return (
        <ul className="posts">
            {allPosts?.map(post => (
                <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
                    <h2>{post.title}</h2>
                    <p>lire l'article</p>
                </li>
            ))}
        </ul>
    )
}

export default PostsList