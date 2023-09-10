import { useEffect, useState } from "react"

export default function Count () {
    const [count, setCount] = useState(0)

    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         // setCount(_count => _count + 1)
    //         setCount(count + 1);
    //     }, 1000)

    //     return () => clearInterval(timer)
    // },[])

    useEffect(() => {
        const timer = setTimeout(() => {
          setCount(count + 1);
        }, 1000);
        return () => clearInterval(timer);
      }, [count]);

    return <div>count: {count}</div>
}