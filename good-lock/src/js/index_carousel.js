import React,{Component} from 'react';
import carouseldata from '../data/carousel_data';

//头部轮播图
class Carousel extends Component{
	render(){
		return(
			<div data-am-widget="slider" className="am-slider am-slider-a1" data-am-flexslider="{touch:true,slideshowSpeed:1500,pauseOnHover:true,animationLoop:true}" >
				<ul className="am-slides">
					{carouseldata.map((e,i)=>{return <li key={i}><a href="javascript:;"><img src={require('../img/'+e.img+'')} /></a></li>})}
				</ul>
			</div>
		)
	}
}

export default Carousel;