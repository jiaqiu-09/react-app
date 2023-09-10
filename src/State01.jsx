import React from "react";

export default class State01 extends React.Component{
    constructor() {
        super()
        this.state = {
            num: 0
        } 

    }

    componentDidMount() {
        console.log('did mount')

        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
              console.log(this.state.num)
              this.setState({ num: this.state.num + 1 })
            }, 0)
        }
    }

    render() {
        
        return <>
         state count: {this.state.num} 
        </>
    }
}