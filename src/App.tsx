import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { routes } from './routes'
import { useEffect } from 'react'
import { getUser } from './http/auth'
import { useAppDispatch } from './hooks/redux'

const router = createBrowserRouter(routes)

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      getUser(dispatch) 
    }
  }, [])

  return (
    <RouterProvider router={router}/>
  )
}

export default App
