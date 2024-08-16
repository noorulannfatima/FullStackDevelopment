

import 'bootstrap/dist/css/bootstrap.min.css'
import Counter from './Components/Counter';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';



const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/counter' element={<Counter/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
