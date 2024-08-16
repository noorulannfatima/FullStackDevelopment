import { useState } from "react";

const Counter = () => {
    // using Hook
    const [count, setCount] = useState(5);

    // Event handlers
    const addValues = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    };
    const subValues = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{height: "100vh",  backgroundColor: "#233142"}}>
            
            <div className="container border p-2 text-center" style={{backgroundColor: "#455d7a", width: "40%", borderRadius: "8%"}}>
            <div style={{backgroundColor: "55d7a"}}><h1>Counter</h1></div>
                <h1>{count}</h1>
                <div>
                    <button onClick={addValues} className="btn btn-danger" style={{ width: "100px", padding: "10px" }}>
                        Add
                    </button>
                </div>
                <div style={{padding: "15px"}}>
                <button onClick={subValues} className="btn btn-danger" style={{ width: "100px", padding: "10px" }}>
                        Remove
                    </button>
                </div>
                <div>
                    <button onClick={() => setCount(0)} className="btn btn-danger" style={{ width: "100px", padding: "10px" }}>
                        Reset
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;
