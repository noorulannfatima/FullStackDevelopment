import { useState } from "react"

export default function Counter() {
    // Generics <number> tells TypeScript that this state will always be a number
    const [count, setCount] = useState<number>(0)
    return (
        <div className="counter-container">
            <h2>Cups ordered: <span className="count-badge">{count}</span></h2>
            <button className="btn-secondary" onClick={() => setCount(count + 1)}>Add one more</button>
        </div>
    )
}