import React,{Component} from "react"
import ReactDOM from "react-dom"
import List from "./list"
import Detail from "./detail"
import Index from "./index"
import { Router, Route, hashHistory } from 'react-router';

class DefaultPage extends  Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <p>我是默认的页面</p>
            </div>
        )
    }
}

class LinkTo extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <a href="#/">default</a>
                <a href="#/list/LL">list(/:most)</a>
                <a href="#/detail">detail</a>
                <a href="#/index">index</a>
            </div>
        )
    }
}

ReactDOM.render(
    <div>
        <LinkTo/>
        <Router history={hashHistory}>
            <Route path="/" component={DefaultPage}/>
            <Route path="/list(/:most)" component={List}/>
            <Route path="/index" component={Index}/>
            <Route path="/detail" component={Detail}/>
        </Router>
    </div>,document.getElementById('app'));

