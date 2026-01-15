import { useState } from "react"
interface OrderFormProps {
    onSubmit: (order: { 
        name: string, 
        size: string, 
        cups: number }) => void
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
    const [name, setName] = useState<string>('')
    const [size, setSize] = useState<string>('small')
    const [cups, setCups] = useState<number>(1)

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit({ name, size, cups })
    }

    return <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
        type="text" 
        id="name" 
        value={name} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
            setName(e.target.value)} 
        />

        <label htmlFor="size">Size:</label>
        <select 
            id="size" 
            value={size} 
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
                setSize(e.target.value)} 
        >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>

        <label htmlFor="cups">Cups:</label>
        <input 
            type="number" 
            id="cups" 
            value={cups} 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                setCups(Number(e.target.value) || 0)} 
        />
        <button type="submit">Submit</button>
    </form>
}