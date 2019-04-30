import React, {Component} from 'react';
import { longStackSupport } from 'q';
import StatefulApp from "./Props_state/StatefullApp"
import TextInput from "./Props_state/TextInput"
import ChildParentInvoke from './parentchild/ChildParentInvoke';
import RefsDemo from './parentchild/RefsDemo';
import AddColorForm from './parentchild/AddColorForm';
import Context from './contextapi/Context'
import CompLifeCycle from './lifecycle/CompLifeCycle'
export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
                <div>
                    {/* <StatefulApp></StatefulApp>
                    <TextInput></TextInput> 
                    <RefsDemo></RefsDemo>
                    <AddColorForm></AddColorForm>
                    <ChildParentInvoke></ChildParentInvoke>
                    <Context></Context>*/}                  
                    <CompLifeCycle></CompLifeCycle>
                 </div>            
        );
    }
}