import React from 'react';
import { Link } from 'react-router-dom';

class AdminUsers extends React.Component {
    render(){
        return (
            <>
                <h1>Admin Users Page</h1>
                <Link to="/admin" >⬅ Back</Link>
            </>
        )
    }
}

export default AdminUsers