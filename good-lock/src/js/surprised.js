import React,{Component} from 'react';
import '../css/surpriesd.css';
import surpriesdata from '../data/surpriesd_data';
import Footer from '../js/footer';

class Surpriesd extends Component{
    render(){
        return(
            <div id="wrap">
                <ul className="wrap_ul">
                    {surpriesdata.map((e,i)=>{
                        return <li className="warp_li" key={i}>
                                    <div className="warp_li_icon"><img src={require('../img/'+e.icon+'')} /></div>
                                    <div className="warp_li_text">
                                        <p className="warp_text_title">{e.title}</p>
                                        <p className="warp_text_explain">{e.text}</p>
                                    </div>
                                    <div className="warp_li_next"><img src={require('../img/next.png')} /></div>
                                </li>
                    })}
                </ul>
                <Footer />
            </div>
            
        )
    }
}
export default Surpriesd;