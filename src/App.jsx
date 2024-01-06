
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import LoginLayout from './layouts/LoginLayout'
import Login from './pages/Login'
import Register from './pages/Register'


const loginrouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<LoginLayout/>}>
      <Route index element={<Login/>}></Route>
      <Route path='register' element={<Register/>}></Route>

    </Route>
  )
)



function App() {
  return (
    <>
    <RouterProvider router={loginrouter}></RouterProvider>
    </>
  )
}

export default App
