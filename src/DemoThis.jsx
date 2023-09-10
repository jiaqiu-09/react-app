import React from "react";

export default class DemoThis extends React.Component{
    constructor(props) {
        super(props)
        console.log('props: ', props)
        this.state = {
            name: props.name
        } 

        this.display = this.display.bind(this)
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentDidUpdate(preProps, preState) {
        console.log('preProps,', preProps)
        console.log('preState,', preState)
    }

    shouldComponentUpdate(prv) {
        console.log('prv:', prv)
        console.log('=d=d=')
        return false
    }

    display() {
        console.log('this: ', this)
        console.log('name: ', this.state.name)
        this.setState({
            name: 'hello again'
        }, () => {
            console.log('components updated')
        })
    }

    render() {
        const {name} = this.state
        return <>
            <div onClick={this.display}>{name}</div>
        </>
    }
}