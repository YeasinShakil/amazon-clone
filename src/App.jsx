
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Checkout from './components/Checkout/Checkout';
import Header from './components/header/Header'
import Home from './components/Home/Home'
import Login from './components/login/Login';

function App() {
  return (
    <div className="app">

      <Routes>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/' element={(
          <>
            <Header></Header>
            <Home></Home>
          </>
        )}></Route>
        <Route path='checkout' element={(
          <>
            <Header></Header>
            <Checkout></Checkout>
          </>
        )}></Route>

      </Routes>
    </div>
  )
}

export default App
