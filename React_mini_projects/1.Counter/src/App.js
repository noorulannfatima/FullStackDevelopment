

import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './Components/Home';
import Counter from './Components/Counter';
import TodoList from './Components/Todolist';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './auth/Signup';
import Login from './auth/Login';


const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}></Route>
        <Route path='/Todolist' element={<TodoList/>}></Route>
        <Route path='/counter' element={<Counter/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        

      </Routes>
    </div>
  )
}

export default App;
