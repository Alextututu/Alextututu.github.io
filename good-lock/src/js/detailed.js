import React,{Component} from 'react';
import '../css/detailed.css';
import detailedata from '../data/detailed_data';
import Footer from '../js/footer';
class detailed extends Component{
    htmls=()=>{
        if(detailedata.length!=0){
            return  <div className="shop_census">
                        <div className="shop_menus">
                            <p>共<span>12</span>件商品，共计：<span>23695</span>元</p>
                            <p>夺宝有风险，参与需谨慎</p>
                            <button>清空所有</button>
                        </div>
                        <div className="shop_btns">
                            <button>立即支付</button>
                        </div>
                    </div>
        }else{
            return  <div className="shop_hint">
                        <img className="shop_hint_img" src={require('../img/qingdan.png')} />
                        <p className="shop_hint_text">购物车空空如也，赶紧把它填满吧！</p>
                    </div>
        }
    }
    render(){
        
        return(
            <div className="detailed_box">
                {/* 购物车商品展示 */}
                <ul className="detailed_ul">
                    {
                        detailedata.map((e,i)=>{
                            return <li key={i}>
                                    <div className="detailed_imgs"><img src={require('../img/'+e.img+'')} /></div>
                                    <div className="detailed_texts">
                                        <p className="detailed_name">{e.introduction}</p>
                                        <p className="detailed_surplus">总库存<span>{e.total}</span>件，剩余<span>{e.overplus}</span>件</p>
                                        <p className="detailed_fun">
                                            购买数量
                                            <button>-</button>
                                            <input type="text" defaultValue={e.num} />
                                            <button>+</button>
                                        </p>
                                    </div>
                                    <div className="detailed_esc"><img src={require('../img/CLOSE_135px_1162328_easyicon.net.png')} /></div>
                                </li>
                        })
                    }
                </ul>
                {this.htmls()}
                
                <Footer />
            </div>
        )
    }
}

export default detailed;