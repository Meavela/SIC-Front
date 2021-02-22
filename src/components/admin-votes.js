import React from 'react';
import { Link } from 'react-router-dom';

class AdminVotes extends React.Component {
    render(){
        return (
            <>
                <h1>Admin Votes Page</h1>
                <Link to="/admin" >⬅ Back</Link>
            </>
        )
    }
}

export default AdminVotes