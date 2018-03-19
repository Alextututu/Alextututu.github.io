import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/article.css';
import labadata from '../data/laba_data';
import shopdata from '../data/shop_data';

import ShopDetails from '../js/shop_details';
import detaildedata from '../data/detailed_data';
import { Route, NavLink } from 'react-router-dom';
import Footer from '../js/footer';


class Article extends Component{
    constructor(){
        super();
        this.data={
            arr:[
                {img:'zhuanqian.png',alt:'我要赚钱'},
                {img:'10.png',alt:'10元专区'},
                {img:'saidan.png',alt:'晒单'},
                {img:'wenti.png',alt:'常见问题'}
            ]
        }
    }

    // 添加方法
    addclick=(ev)=>{
       var arr={
            //唯一商品值
            idnum:"y"+shopdata[ev.target.getAttribute("ids")].id,
            //商品名称
            introduction:shopdata[ev.target.getAttribute("ids")].name,
            //总库存
            total:shopdata[ev.target.getAttribute("ids")].total,
            //剩余库存
            overplus:shopdata[ev.target.getAttribute("ids")].progress,
            //价格
            money:shopdata[ev.target.getAttribute("ids")].money,
            //图片路径
            img:shopdata[ev.target.getAttribute("ids")].url,
            //购买数量，默认1
            num:1
       }
            if(JSON.stringify(detaildedata).indexOf(arr.idnum)!=-1){
                detaildedata.find(e=>arr.idnum==e.idnum).num+=1;
            }else{
                detaildedata.push(arr);
            }
            
    }

    render(){
        let {arr}=this.data;
        return(
            <div className="article_box">
                {/*功能栏*/}
                <div className="article_bar">
                    <ul>
                        {arr.map((e,i)=>{
                            return <li key={i}><a href="javascript:;"><img src={require('../img/'+e.img+'')} alt={e.alt} /><span>{e.alt}</span></a></li>
                        })}
                    </ul>
                </div>
                {/*系统喇叭广告通知栏*/}
               <div id="Notice">
		 	 		<img src={require('../img/laba.png')} />
                    <div className="swiper_wrap">
                        <ul className="font_inner">
                            <marquee behavior="scroll" direction="up" scrollamount="1.5" className="move_one" scrolldelay="0">
                                {labadata.map((e,i)=>{
                                    return <p key={i}>{e.texts}</p>
                                })}
                            </marquee>
                        </ul>
                    </div>
		 	    </div>
                 {/*商品展示栏*/}
                 <div className="Commodity_display">
                    <ul className="Commodity_ul">
                        {shopdata.map((e,i)=>{
                        return      <li key={i}>
                                        <NavLink to="/shopdetails" key={i}>
                                            <div className="Commodity_imgbox">
                                                <img src={require('../img/'+e.url+'')} />
                                                <p className="Commodity_text">{e.name}</p>
                                            </div>
                                        </NavLink>
                                        <div className="Commodity_progress_box">
                                            <div className="progress_bar">
                                                <p className="pregress_bar_text">剩余库存<span>{e.progress}</span>%</p>
                                                <div className="pregress_barsbox">
                                                    <div className="bar_background">
                                                        <div className="schedule" style={{width:e.progress+'%'}}></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="progress_btn">
                                                <button ids={e.id} onClick={this.addclick}>加入清单</button>
                                            </div>
                                        </div>
                                    </li>
                                    
                        })}
                    </ul>
                 </div>
                 <Footer />
            </div>
        )
        
    }
    
}

export default Article;

