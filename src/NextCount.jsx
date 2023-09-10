import * as React from 'react';


function debounce(fn, wait = 300) {
    let timer;
    return (...args) => {
        // clearTimeout(timer)
        console.log('timer:', timer)
        if (timer) {
            return
        }
        timer = setTimeout(function() {
            console.log('date', new Date())
            fn.apply(this, args)
            timer = null;
        }, 3000)
    }
}

function Posts ({id}) {
    const [post, setPost] = React.useState(null)
    const debounceRef = React.useRef(
        debounce((id) => {
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
        debounceRef.current(id)

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