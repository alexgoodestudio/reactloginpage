import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import NewsFeed from './components/news-feed';
import reportWebVitals from './reportWebVitals';
import NavBar from './components/navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <><div className='row'>
    <div className='col-12'><NavBar/> </div>
  </div>
  <div className='row'>
      <div className='col-sm'></div>
      <div className='col-sm '> <NewsFeed /> </div>
      <div className='col-sm'></div>
    </div></>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
