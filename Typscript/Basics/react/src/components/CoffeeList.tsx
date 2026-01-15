import type { Coffee } from '../types'
import CoffeeCard from './CoffeeCard'

interface CoffeeListProps {
    // Array type definition: Coffee[] means an array of Coffee objects
    items: Coffee[];
}
export default function CoffeeList({ items }: CoffeeListProps) {
    return (
        <div className="coffee-list">
            <h2>Our Coffee Menu</h2>
            <div className="coffee-grid">
                {items.map((coffee) => (
                    <CoffeeCard 
                    key={coffee.id} 
                    name={coffee.name} 
                    price={coffee.price} 
                    isSpecial={coffee.isSpecial} />
                ))}
            </div>
        </div>
    )
}