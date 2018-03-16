import React,{Component} from 'react';
import '../css/login.css';

class Login extends Component{
    
    
    render(){
        return(
            <div id="Logins_box">
                <input className="Logins_username" type="text" placeholder="手机号/用户名" />
                <input className="Logins_password" type="password" placeholder="密码" />
                <button className="Logins_logins">登录</button>
                <button className="Logins_registers">没有账号？注册</button>
            </div>
        )
    }
}
export default Login;