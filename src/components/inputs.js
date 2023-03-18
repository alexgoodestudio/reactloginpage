import React from 'react';
import '../index.css';

    export default class Inputs extends React.Component{
        render() {
            return(
            <div>
            <form className='p-4'>
                <input type='email' name='email' placeholder='email' required/> 
                <input type='password' name='pwd' placeholder='password' required/>
            </form>
        </div>
            )
        }
    }
