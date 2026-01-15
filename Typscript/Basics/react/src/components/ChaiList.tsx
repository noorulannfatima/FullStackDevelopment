import type { Chai } from '../types'
import ChaiCard from './ChaiCard'

interface ChaiListProps {
    items: Chai[];
}
export default function ChaiList({ items }: ChaiListProps) {
    return (
        <div>
            <h1>Chai List</h1>
            {items.map((chai) => (
                <ChaiCard 
                key={chai.id} 
                name={chai.name} 
                price={chai.price} 
                isSpecial={chai.price > 50} />
            ))}
        </div>
    )
}