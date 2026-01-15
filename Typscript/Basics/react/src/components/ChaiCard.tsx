interface ChaiCardProps {
    name: string;
    price: number;
    isSpecial?: boolean;
}

export default function ChaiCard(
    { name, price, isSpecial = false }: ChaiCardProps) {
    return (
        <div>
            <h1>Chai Card</h1>
            <p>Name: {name}</p>
            <p>Price: {price}</p>
            {isSpecial && <p>Special</p>}
        </div>
    )
}