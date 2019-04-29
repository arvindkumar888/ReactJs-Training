import React,{Fregment} from 'react';
import ReactDOM from 'react-dom'

export default class RefsDemo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:''
        }
        this.updateState = this.updateState.bind(this);
        this.clearInput = this.clearInput.bind(this);
    };
    updateState(e){
        this.setState({data: e.target.value});
    }
    clearInput(){
        this.setState({data:''});
        alert(this.refs.myInput.value);
        this.refs.myInput.focus();
    }
    render(){
        return(
            <div>
                Name: <input value={this.state.data} 
                onChange = {this.updateState}
                ref="myInput" id="txt1" />
                <button onClick={this.clearInput}>Clear</button>
                <h4> {this.state.data}</h4>
            </div>
        )
    }
}