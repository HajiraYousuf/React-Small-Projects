import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Weather from './pages/Weather.jsx'
import Calculator from './pages/Calculator.jsx'
import TodoList from './pages/TodoList.jsx'
import Clock from './pages/Clock.jsx'

const routerProvider=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {path:"/weather",
        element:<Weather/>
      },
      {path:"/calculator",
        element:<Calculator/>
      },
      {path:"/todo",
        element:<TodoList/>
      },
      {
        path:"/clock",
        element:<Clock/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routerProvider}/>
  </StrictMode>,
)
