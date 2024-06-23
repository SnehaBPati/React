
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PostDetailsPage from './PostDetailsPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/posts/:postId" element={<PostDetailsPage />} />
            </Routes>
        </Router>
    );
};

export default App;