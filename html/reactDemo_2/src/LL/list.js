
import React,{Component} from "react"

class List extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        console.log(this.props.params.most)
    }
    render(){
        return(
            <div>
                <p>我是List,传进的参数是 : {this.props.params.most}</p>
            </div>
        )
    }
}

export default List