import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Carousel from './js/index_carousel';

import Footer from './js/footer';
import Indexs from './js/indexs';
import Login from './js/login';



document.getElementsByTagName("body")[0].style.width=window.innerWidth+"px";
document.getElementsByTagName("body")[0].style.height=window.innerHeight+"px";

window.onresize=function(){
    document.getElementsByTagName("body")[0].style.width=window.innerWidth+"px";
    document.getElementsByTagName("body")[0].style.height=window.innerHeight+"px"; 
}
ReactDOM.render(<Carousel />, document.getElementById('header'));
ReactDOM.render(<Login />, document.getElementById('article'));
document.getElementById('header').style.height=0;




