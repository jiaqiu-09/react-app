import React, { Component } from "react";

export default class DemoThis extends Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    // clickAction = () => {
    clickAction () {
        console.log('this: ', this)
        // this.setState(prv => ({count: prv.count + 1}))
        // this.setState(prv => ({count: prv.count + 1}))

        this.setState({count: this.state.count + 4})
        this.setState({count: this.state.count + 3})
    }

    render() {
        return <>
        count: {this.state.count}
        <button onClick={this.clickAction.bind(this)}>click</button>
        </>
    }
}