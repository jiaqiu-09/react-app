import * as React from 'react';


function debounce(fn, wait = 300) {
    let timer;
    return (...args) => {
        console.log('timer', timer)
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(this, args)
        }, wait)
    }
}

function Posts ({id}) {
    const [post, setPost] = React.useState(null)
    const debounceRef = React.useRef(
        debounce((id) => {
            console.log(';=====', id)
            fetch(`https://dummyjson.com/posts/${id}`)
                .then(res => res.json())
                .then(data => setPost(data.body))
                .catch(err => {
                    console.log('err: ', err)
                })
        })
    )
    // React.useEffect(() => {

    //     const abort = new AbortController()

    //     fetch(`https://dummyjson.com/posts/${id}`, {signal: abort.signal})
    //     .then(res => res.json())
    //     .then(data => setPost(data.body))
    //     .catch(err => {
    //         console.log('err: ', err)
    //     })

    //     return () => {
    //         abort.abort()
    //     }
    // }, [id])

    // const _debounce = React.useCallback(debounce(() => saveInput(), 300), [])

    React.useEffect(() => {
        const _ddd = debounceRef.current
        _ddd(id)

        // debounceRef.current(fetch(`https://dummyjson.com/posts/${id}`)
        // .then(res => res.json())
        // .then(data => setPost(data.body))
        // .catch(err => {
        //     console.log('err: ', err)
        // }))
    }, [id])
    return <>
     here is post body: {post}
    </>
}

export default function NextCount() {
    const [id, setId] = React.useState(0)

    return <>
        click to update id: {id}
        <button onClick={() => {
            setId(Math.floor(Math.random() * 100))
        }}>click</button>
        <Posts id={id} />
    </>
}