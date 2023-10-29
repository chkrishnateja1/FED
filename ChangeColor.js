import React,{Component} from 'react';
class ChangeColor extends Component{
    constructor(props){
        super(props);
        this.state={
            color:'#ffoffo'
        }
    }
    redHandles=()=>{
        this.setState({color:'#ff0000'});
    }
    greenHandles=()=>{
        this.setState({color:'#00ff00'});
    }
    blueHandles=()=>{
        this.setState({color:'#0000ff'});
    }
    render(){
        return(
            <div>
                <h1 style={{color:this.state.color}}>textColor</h1>
                <button type='button' onClick={this.redHandles}>RED</button>
                &nbsp;
                <button type='button' onClick={this.greenHandles}>GREEN</button>
                &nbsp;
                <button type='button' onClick={this.blueHandles}>GREEN</button>
            </div>
        )
    }
}
export default ChangeColor;