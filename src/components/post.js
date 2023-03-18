import React from 'react';
import SignUpButton from './sign-up-button';
import LogInButton from './login-button';
import Comment from './comment';
import '../index.css';
import NavBar from './navbar';



export default class Post extends React.Component{
    render(){
        return(
        <div className="postBorder">
                <h3>Login Page</h3>
                <Comment />
            </div>
    
        )
    }
}
