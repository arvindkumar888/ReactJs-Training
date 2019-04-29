import React, {Component} from 'react';
import { longStackSupport } from 'q';
import StatefulApp from "./Props_state/StatefullApp"
import TextInput from "./Props_state/TextInput"
export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <form>
                <div>
                    <StatefulApp></StatefulApp>
                    <TextInput></TextInput>
                 </div>
            </form>
            
        );
    }
}