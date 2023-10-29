import React,{Component} from 'react';
class CounterClass extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
    incrementHandles=()=>{
        this.setState({count:this.state.count+1});
    }
    decrementHandles=()=>{
        this.setState({count:this.state.count-1});
    }
    render(){
        return(
            <div>
                <button type='submit' onClick={this.incrementHandles}>incremnet(+)</button>
                &nbsp;&nbsp;
                {this.state.count}
                &nbsp;&nbsp;
                <button type='submit' onClick={this.decrementHandles}>decrement(-)</button>
            </div>
        )
    }
} 
export default CounterClass;   