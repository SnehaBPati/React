
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState({});

    useEffect(() => {
        const fetchPosts = async () => {
            const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
            const postsData = await postsResponse.json();
            setPosts(postsData);

            const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
            const usersData = await usersResponse.json();
            const usersMap = usersData.reduce((acc, user) => {
                acc[user.id] = user;
                return acc;
            }, {});
            setUsers(usersMap);
        };

        fetchPosts();
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <p><strong>Author:</strong> {users[post.userId]?.name}</p>
                        <Link to='{/posts/${post.id}}'>Read more</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
