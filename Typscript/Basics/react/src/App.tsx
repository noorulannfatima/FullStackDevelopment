import './App.css'
import CoffeeCard from './components/CoffeeCard'
import Counter from './components/Counter'
import CoffeeList from './components/CoffeeList'
import OrderForm from './components/OrderForm'

import type { Coffee } from './types'
import Card from './components/Card'

// coffee data

const menu: Coffee[] = [
    { id: 1, name: 'Espresso', price: 3, isSpecial: false },
    { id: 2, name: 'Latte', price: 4, isSpecial: true },
    { id: 3, name: 'Cappuccino', price: 4.5, isSpecial: false },
    { id: 4, name: 'Americano', price: 3.5, isSpecial: false },
    { id: 5, name: 'Mocha', price: 5, isSpecial: true },
    { id: 6, name: 'Macchiato', price: 4, isSpecial: false },
    { id: 7, name: 'Flat White', price: 4.5, isSpecial: false },
    { id: 8, name: 'Irish Coffee', price: 6, isSpecial: true },
    { id: 9, name: 'Affogato', price: 5.5, isSpecial: false },
    { id: 10, name: 'Cold Brew', price: 4, isSpecial: false },
]


function App() {

  return (
    <>
    <div className="app-container">
     <h1 className="main-title">Coffee Shop</h1>
     <CoffeeCard name="Daily Special: Latte" price={4} isSpecial={true} />
     <Counter />
     <CoffeeList items={menu} />
     <OrderForm onSubmit={(order) => console.log(order)} />
      </div>
      <div className="footer-card">
      <Card 
      title="Join our Loyalty Program"
      footer={<button className="btn-primary">Sign Up Now</button>}/>
      </div>
    </>
  )
}

export default App
