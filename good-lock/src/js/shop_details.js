import React,{Component} from 'react';
import '../css/shop_details.css';
import shopdetailsdata from '../data/shop_details_data';

class Shopdetails extends Component{
    
    render(){
        // document.getElementById("header").style.display="none";
        return(
            <div className="details">
                <p className="details_title">第(110)期【预售】苹果(apple)iphone 16GB 颜色随机(预售商品，到货即发)</p>
                <div className="details_box"><div className="details_bar"></div></div>
                <div className="details_detock"><p>总库存<span>5263</span></p><p>剩余<span>123</span></p></div>
                <div className="details_functions">
                    <ul className="details_fun_ul">
                        <li className="details_fun_li">图文详情</li>
                        <li className="details_fun_li">往期揭晓</li>
                        <li className="details_fun_li">评论详情</li>
                    </ul>
                </div>
                <div className="details_comment">
                    <p className="details_hint">评论<span>(仅显示前5条，可进入评论详情查看所有评论)</span></p>
                    <ul className="details_comment_ul">
                        {/* <li className="details_comment_li">
                            <div className="details_li_time">
                                <p>2016-04-27</p>
                            </div>
                            <div className="details_li_img"><img src={require("../img/touxiang.jpg")} /></div>
                            <div className="details_li_text">
                                真他妈好，这东西非常不错，大家赶紧买，没库存了错，大家赶紧买，没库存了错，大家赶紧买，没库存了错，大家赶紧买，没库存了错，大家赶紧买，没库存了错错，大家赶紧买，没库存了错，大家赶紧买，没库存了，大家赶紧买，没库存了你们就没戏了
                            </div>
                        </li> */}
                        {
                            shopdetailsdata.map((e,i)=>{
                                return <li className="details_comment_li" key={i}>
                                            <div className="details_li_time">
                                                <p>{e.time}</p>
                                            </div>
                                            <div className="details_li_img"><img src={require('../img/'+e.Head_portrait+'')} /></div>
                                            <div className="details_li_text">
                                                {e.text}
                                            </div>
                                        </li>
                            })
                        }
                    </ul>
                </div>
                <div className="footerbutton am-topbar-fixed-bottom"><button>加入购物车</button></div>
            </div>
        )
    }
}

export default Shopdetails;
