import React, {Component} from 'react';
import { longStackSupport } from 'q';
import StatefulApp from "./Props_state/StatefullApp"

export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <div>
             <StatefulApp></StatefulApp>
            </div>
        );
    }
}