// Interface defines the expected props for the component
interface CoffeeCardProps {
    name: string; // Explicit string type
    price: number; // Explicit number type
    isSpecial?: boolean; // Optional property marked with ?
}

export default function CoffeeCard(
    // Destructuring props with default value for isSpecial
    { name, price, isSpecial = false }: CoffeeCardProps) {
    return (
        <div className="coffee-card">
            <h3>{name}</h3>
            <p className="price">${price}</p>
            {isSpecial && <span className="special-badge">Special Offer</span>}
        </div>
    )
}