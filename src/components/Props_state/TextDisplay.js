import React, {Component} from 'react'
export default class TextDisplay extends Component {
    render(){
    
        return (
            <div>Welcome:{this.props.text}</div>
        )
    }
}