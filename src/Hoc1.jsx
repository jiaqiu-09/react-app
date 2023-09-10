import React, { useEffect } from "react"

function classOne(WrapComponent) {
    return class Idex extends React.Component {
        state = {
            name: 'allen',
            age: 12
        }

        componentDidMount() {
            console.log('HOC')
        }

        render() {
            return <WrapComponent {...this.props} {...this.state} />
        }
    }
}

function Index(props) {

    const { name, age } = props

    useEffect(() => {
        console.log('index')
        console.log('props: ', props)
    }, [])

    return <div>hello {name}, age: {age}</div>
}

export default classOne(Index)