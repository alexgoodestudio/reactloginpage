import React from 'react';
import Post from './post';
import '../index.css';
import NavBar from './navbar';



export default class NewsFeed extends React.Component{
    render() {
        return(
            <div>
                <Post/>
                </div>
        )
    }
}