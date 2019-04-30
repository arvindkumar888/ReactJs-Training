import React from 'react';
export default class CompLifeCycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data:0,
            msg:'Initial Data..'
        }
        //this.seNewNumber = this.setNewNumber.bind(this);
        //this.updateState = this.updateState.bind(this);
    };
    setNewNumber(e){
        this.setState({data: this.state.data +1})
    }
    updateState(e){
        this.setState({msf:e.target.value});
    }
    render(){
        return (
            <div>
                <button onClick={(event)=>{this.setNewNumber(event)}}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
                <br/>
                <input type="text" value={this.state.msg} onChange={(e)=>this.updateState(e)}></input>
                <h3>{this.state.msg}</h3>
            </div>
        )
    }
}
class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {name:"Arvind"}
        console.log("In constructor"+props.myNumber);
        console.log("1. Content Constructor fired- Initialization phase");
        this.handelScroll = this.handelScroll.bind(this);
    }
    handelScroll(){
        console.log("Handle Scroll is executed");
    }
    componentWillMount(){
        console.log("1.componentWillMount =>"+this.props.myNumber);
    }
    componentDidMount(){
        console.log('Component DID MOUNT');
        console.log('componentDidMount =>'+this.props.myNumber);
    }
    componentWillReceiveProps(nextProps){
        console.log("Next Props"+nextProps.myNumber);
        this.setState({
            isPassed:nextProps.myNumber >= 60,
        });
    }
    static getDerivedStateFromProps(props, state){
        console.log("Get Derived");
        console.log(state.name);
        return {}
    }
    componentWillUpdate(nextProps, nextState){
        console.log(nextProps.myNumber);
    }
    componentDidUpdate(prevProps, prevState){
        console.log("Did Update")
    }
    componentDidCatch(err){
        console.log("Error"+err);
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.handelScroll);
    }
    render(){
        return(
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}