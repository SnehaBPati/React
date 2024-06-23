
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetailsPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchPostDetails = async () => {
            const postResponse = await fetch('https://jsonplaceholder.typicode.com/posts/${postId}');
            const postData = await postResponse.json();
            setPost(postData);

            const userResponse = await fetch('https://jsonplaceholder.typicode.com/users/${postData.userId}');
            const userData = await userResponse.json();
            setUser(userData);

            const commentsResponse = await fetch('https://jsonplaceholder.typicode.com/posts/${postId}/comments');
            const commentsData = await commentsResponse.json();
            setComments(commentsData);
        };

        fetchPostDetails();
    }, [postId]);

    if (!post || !user) return <p>Loading...</p>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Author Details</h2>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <p><strong>{comment.name}</strong></p>
                        <p>{comment.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetailsPage;
