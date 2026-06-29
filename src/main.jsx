import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from '../store/store.js'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {SignUpPg, AllApplicationPg, ApplicationPg, LoginPg, Home, AddApplicationPg} from './index.js'


const router = createBrowserRouter ([
  {
    path: '/',
    element: <App/>,

    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/all-applications',
        element: <AllApplicationPg/>
      },
      {
        path: '/application/:id',
        element: <ApplicationPg/>
      },
      {
        path: '/login',
        element: <LoginPg/>
      },
      {
        path: '/sign-up',
        element: <SignUpPg/>
      },
      {
        path: '/add-application',
        element: <AddApplicationPg/>
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    < Provider store = {store}>
    <RouterProvider router={router}/>
    
    </Provider>
  </StrictMode>,
)
