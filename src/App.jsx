
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Dashboard from "./pages/Home"

function App() {


  return (
    <>
        <Routes >
          <Route path='/' element={<Dashboard/>}></Route>
        </Routes>
    </>
  )
}

export default App
