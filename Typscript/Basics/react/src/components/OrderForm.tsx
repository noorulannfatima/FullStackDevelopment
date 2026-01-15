import { useState } from "react"

// Interface defines the shape of the props object
interface OrderFormProps {
    // Function type definition: takes an object and returns void
    onSubmit: (order: { 
        name: string, 
        size: string, 
        cups: number }) => void
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
    // Explicitly specifying state types using generics
    const [name, setName] = useState<string>('')
    const [size, setSize] = useState<string>('small')
    const [cups, setCups] = useState<number>(1)

    // React.FormEvent<HTMLFormElement> types the form submission event
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit({ name, size, cups })
    }

    return <form className="order-form" onSubmit={handleSubmit}>
        <h3>Place Your Order</h3>
        <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
            type="text" 
            id="name" 
            value={name}
            className="form-input"
            // React.ChangeEvent<HTMLInputElement> types the input change event
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setName(e.target.value)} 
            />
        </div>

        <div className="form-group">
            <label htmlFor="size">Size:</label>
            <select 
                id="size" 
                value={size} 
                className="form-select"
                // React.ChangeEvent<HTMLSelectElement> types the select change event
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                    setSize(e.target.value)} 
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>

        <div className="form-group">
            <label htmlFor="cups">Cups:</label>
            <input 
                type="number" 
                id="cups" 
                value={cups} 
                className="form-input"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                    setCups(Number(e.target.value) || 0)} 
            />
        </div>
        <button type="submit" className="btn-primary">Submit Order</button>
    </form>
}