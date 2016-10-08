import React from 'react';

class Login extends React.Component {

    render(){
        return (
            <div className="container">
                <form>
                    <h1>Login</h1>

                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" />
                    </div>
                </form>
            </div>
        );
    };
}

export default Login;
