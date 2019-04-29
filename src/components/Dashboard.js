import React, {Component} from 'react';
import { longStackSupport } from 'q';
import StatefulApp from "./Props_state/StatefullApp"
import TextInput from "./Props_state/TextInput"
import ChildParentInvoke from './parentchild/ChildParentInvoke';
import RefsDemo from './parentchild/RefsDemo';
import AddColorForm from './parentchild/AddColorForm';
export default class Dashboard extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render(){
        return(
            <form>
                <div>
                    {/* <StatefulApp></StatefulApp>
                    <TextInput></TextInput> */}
                    <ChildParentInvoke></ChildParentInvoke>
                    <RefsDemo></RefsDemo>
                    <AddColorForm></AddColorForm>
                 </div>
            </form>
            
        );
    }
}