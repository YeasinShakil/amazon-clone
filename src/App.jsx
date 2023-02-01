
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Checkout from './components/Checkout/Checkout';
import Header from './components/header/Header'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='checkout' element={<Checkout></Checkout>}></Route>
      
    </Routes>
    </div>
  )
}

export default App
