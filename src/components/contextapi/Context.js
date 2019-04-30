import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component{
    constructor(props){

        super(props);
        this.state ={
            name:'Arvind',
            salary:5000,
            job: 'Engineer'
        }
       
    }
    render(){
        return(
            <MyContext.Provider value={{
                state:this.state,
                incrementSalary: ()=>this.setState({
                    salary:this.state.salary+1000
                })
            
            }}>
            {this.props.children}
            </MyContext.Provider>
        )
    }
}

export default class Context extends React.Component{
    render(){
        return(
            <MyProvider>
            <div className="bg-success">
            <h2 className="bg-info">React Context API Demo</h2>
            </div>    
            <Family/>
            </MyProvider>
        )
    }
}

const Family=()=>{
    return(
        <div>
            <Person/>
            <Employee/>
        </div>
    )
}

class Person extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {
                        (context)=>(
                            <React.Fragment>
                                <h3 className="bg-primary">Person Details</h3>
                                <p> Hi! {context.state.name}</p>
                                <p className="bg-danger">Salary: {context.state.salary}</p>
                                <p> Job :{context.state.job}</p>
                                <button className="btn btn-primary"
                                onClick={context.incrementSalary}> Increment Salary</button>
                            </React.Fragment>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}

class Employee extends React.Component{
    render(){
        return(
            <div>
                <MyContext.Consumer>
                    {
                        (context)=>(
                            <React.Fragment>
                                <h3 className="bg-primary">Person Details</h3>
                                <p> Hi! {context.state.name}</p>
                            </React.Fragment>
                        )
                    }
                </MyContext.Consumer>
            </div>
        )
    }
}