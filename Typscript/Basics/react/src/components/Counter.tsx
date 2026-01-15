import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState<number>(0)
    return (
        <div>
            <h1>Cups ordered: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Add one more</button>
        </div>
    )
}