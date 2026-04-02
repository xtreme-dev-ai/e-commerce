import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './components/Layout/UserLayout'
function App() {
  

  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserLayout/>}>
        {/* User layout routes */}
      </Route>
    </Routes>
    </BrowserRouter>
    
   </div>
    
  )
}

export default App
