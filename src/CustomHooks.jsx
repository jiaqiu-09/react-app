// import { useEffect, useMemo, useState } from "react"

// export const useLoading = (urls) => {
//     const [imgStatus, setImgStatus] = useState({})

//     // const _urls = useMemo(() => urls ? urls : [], [urls])
    

//     useEffect(() => {
//         const _urls = [...urls]
//         console.log('urls:: ', _urls)
//         const loadImg = (url) => {
//             const _img = new Image()
//             _img.src = url

//             _img.onload = () => {
//                 setImgStatus(_prev => ({..._prev, [url]: {status: 'success'}}))
//             }

//             _img.onerror = () => {
//                 setImgStatus(_prev => ({..._prev, [url]: {status: 'error'}}))
//             }
//         }

//         _urls && _urls.map(loadImg)
//     }, [])

//     return [imgStatus]
// }

import * as React from 'react'

function imgPromise(src) {
    return new Promise((resolve, reject) => {
        const i = new Image()
        i.onload = () => resolve()
        i.onerror = () => reject()
        i.src = src
    })
}

export const useImage = function(src) {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)

    React.useEffect(() => {
        console.log('====', src)
        imgPromise(src).then((result) => {
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            setError(err)
        });
    }, [src])

    return { isLoading: loading, src:src, error }
}

export const useImagesLoad = (urls) => {
    const [res, setRes] = React.useState([])
    const [imgStatus, setImgStatus] = React.useState({})
    React.useEffect(() => {
        console.log('==== update ', urls, res)
        if (!urls || res.length >= urls.length) {
            return
        }

        const loadImg = (src) => {
            const initStatus = {
                isLoading: true,
                id: src,
                error: null
            }
            setImgStatus(initStatus)
            setRes(_prev => {
                const idx = _prev.findIndex(s => s.id === src)
                if (idx < 0) {
                    return [..._prev, initStatus]
                }
                return _prev
            })
            
            imgPromise(src).then((result) => {
                initStatus.isLoading = false
                setImgStatus(initStatus)
            }).catch((err) => {
                initStatus.isLoading = false
                initStatus.error = err
                setImgStatus(initStatus)
            }).finally(() => {
                const _res = res.slice(0)
                const idx = _res.findIndex(s => s.id === src)
                if (idx > -1) {
                    _res.splice(idx, 1, initStatus)
                    setRes(_res)
                }
            });
        }

        urls && urls.map(loadImg)
    }, [res, urls])

    return [res]
}