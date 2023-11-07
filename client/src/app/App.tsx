import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import { BoardPage } from 'pages/Board'
import { LoginPage } from 'pages/Login'

const router = createBrowserRouter([
  {
    path: '/board',
    element: <BoardPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  }
])

function App() {

  return (
    <div>
     <RouterProvider router={router} />
    </div>
  )
}

export default App
