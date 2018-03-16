import React,{Component} from 'react';
import '../css/my.css';
import mydata from '../data/my_data';
import Footer from '../js/footer';

class My extends Component{
    render(){
        return(
            <div className="my_box">
                {/* 头部资料 */}
                <div className="my_means">
                    {/* 头像 */}
                    <div className="my_head"><img src={require('../img/touxiang.jpg')} /></div>
                    <div className="my_datasbox">
                        <p className="my_name">托他师傅斯基</p>
                        <p className="my_phone"><span>手机号：</span>17761288547</p>
                        <p className="my_email"><span>邮箱号：</span>969289239@qq.com</p>
                    </div>
                </div>
                {/* 积分余额 */}
                <div className="my_integral">
                    <div className="my_points"><p>积分：<span>0</span></p></div>
                    <div className="my_money"><p>一元币：<span>0</span></p></div>
                    <div className="my_btn"><button>充值</button></div>
                </div>
                {/* 三个按钮 */}
                <div className="my_share">
                    <div className="my_share_qq"><img src={require('../img/qq@3x.png')} /><p>一键加群</p></div>
                    <div className="my_share_duobao"><img src={require('../img/fenxiang@3x.png')} /><p>分享夺宝</p></div>
                    <div className="my_share_opinion"><img src={require('../img/yijian@3x.png')} /><p>意见反馈</p></div>
                </div>
                {/* 功能区 */}
                <div className="my_functions">
                    <ul className="my_function_ul">
                        {/* <li className="my_function_li"><img src={require('../img/shezhi@3x.png')} /><span>夺宝记录</span><img src={require('../img/next.png')} /></li> */}
                        {mydata.map((e,i)=>{
                            return <li key={i} className="my_function_li"><img src={require('../img/'+e.icon+'')} /><span>{e.text}</span><img src={require('../img/next.png')} /></li>
                        })}
                    </ul>
                </div>
                <Footer />
            </div>
        )
    }
}
export default My;