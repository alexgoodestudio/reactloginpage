import React from 'react';
import '../index.css';

    export default class Inputs extends React.Component{
        render() {
            return(
            <div>
            <form className='p-4'>
                <input type='email' name='email' placeholder='Email' required/> 
                <input type='password' name='pwd' placeholder='Password' className='input2' required/>
            </form>
        </div>
            )
        }
    }
