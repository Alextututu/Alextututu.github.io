import React,{Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../css/footer.css';
import footerdata from '../data/footer_bar_data';


import Article from '../js/article';
import Surpriesd from '../js/surprised';
import My from '../js/my';
import Detailed from '../js/detailed';


class Fuck extends Component{
    constructor(){
		super();
		this.state={
			data:footerdata
		}
	}

    //点击方法
    click=(ids,pitchs,ev)=>{
        this.fuckyou(ev.target);
        if(ids===0){
            document.getElementById("header").style.display="block";
        }else{
            document.getElementById("header").style.display="none";
        }
    }

    // 根据on加载图片方法
	pitchs=(derails,pitchs,imgs)=>{
		if(derails==="on"){
			return pitchs;
		}else{
			return imgs;
		}
	}
	// 点击之后更改数据的开关
	fuckyou=(target)=>{
        let {data}=this.state;
		data.forEach((e,i)=>{
			e.derail="off";
		})
        data[target.getAttribute("ids")].derail="on";
        this.setState({data});
	}
    
     render(){
         return(
            <footer id="footer" className="am-topbar-fixed-bottom">
                <ul className="footer_divs">
                    {
                        footerdata.map((e,i)=>{
                            return <li key={i}><NavLink className="fuckyous" to={e.to} ><img ids={i} derail={e.derail} onClick={this.click.bind(this,i,e.pitch)} src={require('../img/'+this.pitchs(e.derail,e.pitch,e.img)+'')} /></NavLink></li>
                        })
                    }
                </ul>
            </footer>
         )
     }

        
    
}
export default Fuck;
