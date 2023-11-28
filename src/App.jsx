import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Components/NavBar/Navbar'
import Resume from './Components/Resume/Resume'

function App() {
  
  return (
    <>
      <NavBar/>
      <Resume/>
      <Routes>
        {/* <Route 
          path='/'
          element={</>}
        /> */}
      </Routes>
    </>
  )
}

export default App
