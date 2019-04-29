import React, {Component} from 'react';
import TextDisplay from './TextDisplay'

export default class TextInput extends Component{
    constructor(props){
        super(props)
        this.state= {inputText:'Arvind'}
    }
    handleChange(event){
        this.setState({
            inputText:event.target.value
        })
    }
    render(){
        return (
            <div>
                <input type="text" value="Uncontrolled"/>
                <div> Enter Name</div>
                <input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
                {this.state.inputText ? console.log("Valid"):console.log("No Data")}
                {this.state.inputText
                ?<TextDisplay text={this.state.inputText}/>
                :<TextDisplay text="Enter Name Plase"/>
                }
            </div>
        )
    }
}