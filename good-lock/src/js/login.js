import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../css/login.css';
import userdata from '../data/User_data';
import Carousel from '../js/index_carousel';
import Indexs from '../js/indexs';

class Login extends Component{
    
    click=()=>{
        var user=document.getElementById("Logins_username").value;
        var pwd=document.getElementById("Logins_password").value;
        var peopo={...userdata};
        userdata.find(e=>{
            if(e.username===user&&e.pwd===pwd){
                ReactDOM.render(<Indexs />, document.getElementById('article'));
                document.getElementById('header').removeAttribute('style');
            }
        });
    }
    register=()=>{
        // 其实是我懒得写注册页了hiahiahia 手动滑稽
        // 登录账号Alextututu 123456
        alert("暂时无法注册！请使用管理员账户登录");
    }
    
    render(){
        return(
            <div id="Logins_box">
                <input id="Logins_username" className="Logins_username" type="text" placeholder="手机号/用户名" />
                <input id="Logins_password" className="Logins_password" type="password" placeholder="密码" />
                <button className="Logins_logins" onClick={this.click}>登录</button>
                <button className="Logins_registers" onClick={this.register}>没有账号？注册</button>
            </div>
        )
    }
}
export default Login;