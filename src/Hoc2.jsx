import React, { useEffect, useState } from "react"

function funcHoc(WrapComponent) {
    return function Index(props) {
        useEffect(() => {
            console.log('hoc')
        }, [])
        const [state, setState] = useState({name: 'alla'})

        const changeName = (v) => {
            setState({
                name: v
            })
        }
        return <WrapComponent {...props} {...state} changeName={changeName} />
    }
}

function Index(props) {

    const { name, age, changeName } = props

    const [newName, setNewName] = useState('')

    useEffect(() => {
        console.log('index')
        console.log('props: ', props)
    }, [])

    return <>
    <div>hello {name}, age: {age}</div>
    <input value={newName} onChange={(e) => setNewName(e.target.value)}/>
    <button onClick={() => changeName(newName)}>change</button>
    </>
}

export default funcHoc(Index)