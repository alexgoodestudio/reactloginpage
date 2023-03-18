import React from 'react';
import SignUpButton from './sign-up-button';
import LogInButton from './login-button';
import Inputs from './inputs';



export default class Comment extends React.Component{
    render(){

    return(
        <div className ="text-center ">

            <div className='Inputs'>
            <Inputs/>
            </div>

            <div>
                <LogInButton/>
                <SignUpButton/>
            </div>
        </div>
        )
    }
}
