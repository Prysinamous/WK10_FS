import React, { Component } from 'react'

export default class NameEntry extends Component {

    constructor(props) {
        super(props)

        this.state = {
            fname: 'Default First Name',
            email: 'Email Address'
        }

        this.changeMessageState = this.changeMessage.bind(this)
    }


    showMessage() {
        // console.log("You Click Me...")
        alert("By Robertha A.D")
    }

    readName = e => {
        console.log(e.target.name)
        //Update the state object
        this.setState({
            ...this.state,
            [e.target.name]:e.target.value
        })
    }

    readFormValues = e => {
        e.preventDefault()
        console.log(JSON.stringify(this.state))
    }

    changeMessage() {
        alert("Hello")
    }


//<h1>{this.state.fname} {this.state.lname}</h1>
    render() {
        return (
            <div className="">

                {/*<form onSubmit={this.readFormValues} className="App-header">*/}
                {/*    <input name= "email" placeholder="Enter Email" type="text" onChange={this.readName} />*/}
                {/*    <input type="submit" value="Submit" />*/}
                {/*</form>*/}

                {/*<form onSubmit={this.readFormValues} className="App-header">*/}
                {/*    <input name= "fname" placeholder="Full Name " type="text" onChange={this.readName} />*/}
                {/*    <input type="submit" value="Submit" />*/}
                {/*</form>*/}
            </div>
        )
    }

    //Component lifecycle methods
    componentWillMount()
    {
        console.log('Component Will MOUNT!')
    }

    componentDidMount()
    {
        console.log('Component Did MOUNT!')
    }

    componentWillReceiveProps(newProps)
    {
        console.log('Component Will Recieve Props!')
    }

    shouldComponentUpdate(newProps, newState)
    {
        console.log('Component shouldComponentUpdate!')
        return true;
    }

    componentWillUpdate(nextProps, nextState)
    {
        console.log('Component Will UPDATE!');
    }

    componentDidUpdate(prevProps, prevState)
    {
        console.log('Component Did UPDATE!')
    }

    componentWillUnmount()
    {
        console.log('Component Will UNMOUNT!')
    }
}
