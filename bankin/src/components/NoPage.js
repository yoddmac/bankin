//no page 404 error
import React from 'react';
import { Link } from 'react-router-dom';

export default function NoPage() {
    return (
        <div>
            <h1>404 - Not Found!</h1>
            <Link to="/">Go Home</Link>
        </div>
    )
}