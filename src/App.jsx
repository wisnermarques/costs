import './App.css'

//2- Reaproveitamento de estrutura
import { Outlet } from 'react-router-dom'
import Navbar from './layout/Navbar'
import Footer from './layout/Footer'

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div className="min_height">
        <Outlet />
      </div>
     <Footer />
    </div>
  )
}

export default App
