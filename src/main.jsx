import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from '../store/store.js'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import {SignUpPg, AllApplicationPg, ApplicationPg, LoginPg, Home, AddApplicationPg, UpdateApplications} from './index.js'
import UpdateApplicationPg from './pages/UpdateApplication_pg.jsx'
import Protected from './AuthLayout.jsx'

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
        element: (
          <Protected authentication>
            {""}
            <AllApplicationPg/>
          </Protected>
        )
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
        element: (
          <Protected authentication>
            {""}
            <AddApplicationPg/>
          </Protected>
        )
      },
      {
        path: '/update-application/:slug',
        element: (
          <Protected authentication>
            {""}
            <UpdateApplicationPg/>
          </Protected>
        )
      },
      {
        path: '/view-application/:slug',
        element: (
          <Protected authentication>
            {""}
            <ApplicationPg/>
          </Protected>
        )
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
