import { Link } from "react-router-dom";
import { PostsData } from "../interfaces";
import './postDetail.css';

interface PostDetailProps {
    onePost: PostsData | null;
}

const PostDetail: React.FC<PostDetailProps> = ({onePost}) => {
    return (
        <div className="post">
            <h1>Publication numéro: {onePost?.id}</h1>
            <h2>{onePost?.title}</h2>
            <p>{onePost?.body}</p>
            <Link to="/">Retour à l'accueil</Link>
        </div>
    );
}

export default PostDetail;