import './App.css'
import ChaiCard from './components/ChaiCard'
import Counter from './components/Counter'
import ChaiList from './components/ChaiList'
import OrderForm from './components/OrderForm'

import type { Chai } from './types'
import Card from './components/Card'

// chai data

const menu: Chai[] = [
    { id: 1, name: 'Chai', price: 10, isSpecial: true },
    { id: 2, name: 'Chai', price: 10, isSpecial: true },
    { id: 3, name: 'Chai', price: 10, isSpecial: true },
    { id: 4, name: 'Chai', price: 10, isSpecial: true },
    { id: 5, name: 'Chai', price: 10, isSpecial: true },
    { id: 6, name: 'Chai', price: 10, isSpecial: true },
    { id: 7, name: 'Chai', price: 10, isSpecial: true },
    { id: 8, name: 'Chai', price: 10, isSpecial: true },
    { id: 9, name: 'Chai', price: 10, isSpecial: true },
    { id: 10, name: 'Chai', price: 10, isSpecial: true },
]


function App() {

  return (
    <>
    <div>
     <ChaiCard name="Chai" price={10} isSpecial={true} />
     <Counter />
     <ChaiList items={menu} />
     <OrderForm onSubmit={(order) => console.log(order)} />
      </div>
      <div>
      <Card 
      title="Chai"
      footer={<button>Order now</button>}/>
      </div>
    </>
  )
}

export default App
