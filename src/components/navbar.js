import React from 'react';
import '../index.css';

export default class LogInButton extends React.Component {
    render(){
        return( <div className="navbar">
                        
                        <h4 > Lockout</h4>
                        <button className='btn1'>Welcome!</button>
                        <button className='btn2'>Help </button>
                        <button className='btn3'>About Us</button>    
                        <button className='btn4'>Sign Out</button>  
                        
                </div>
            
        

        );
    }
}