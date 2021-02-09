import React from 'react';

class Login extends React.Component{
    render(){
        return (
            <div>
                <div>
                    Username :
                    <input type="text"></input>
                </div>
                <div>
                    Password :
                    <input type="password"></input>
                </div>
                <div>
                    <button type="button" className="btn btn-primary">Login</button>
                </div>
            </div>
        )
    }
}

export default Login