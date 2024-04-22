import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import TheLastofUs from './pages/TheLastOfUs'

const router = createBrowserRouter ([
  {
    path: "/",
    element: <TheLastofUs />
  }
])


export default function App() {
  return (
    <RouterProvider router={router} />
  )
}