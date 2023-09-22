
import './App.css'
import {  Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
function App() {

  return (
  <div id='navbar'>
   <NavBar/>
    <Outlet/>
  </div>
  )
}

export default App
