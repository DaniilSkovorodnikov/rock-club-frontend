import { Route, Routes } from 'react-router-dom'
import './App.css'
import Auth from './pages/Auth'
import Main from './pages/Main'
import Layout from './components/Layout'

function App() {

  return (
    <Routes>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Main/>}/>
      </Route>
    </Routes>
  )
}

export default App
