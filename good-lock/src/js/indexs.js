import {Switch,Route,BrowserRouter as Router} from 'react-router-dom';

import React,{Component} from 'react';
import Article from '../js/article';
import Surpriesd from '../js/surprised';
import My from '../js/my';
import Detailed from '../js/detailed';

import ShopDetails from '../js/shop_details';
class Indexs extends Component{
    render(){
        return(
            <Router>
                <div className="fuckbox">
                        <Route exact path="/" component={Article}  />
                        <Route path="/news" component={Surpriesd}/>
                        <Route path="/course" component={Detailed}/>
                        <Route path="/joinUs" component={My}/>
                        <Route path="/shopdetails" component={ShopDetails}/>
                </div>
            </Router>
        )
    }
}
export default Indexs;