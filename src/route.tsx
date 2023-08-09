import AppQuery from './app-query'
import AppSimple from './app-simple'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'

export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: () => <Navigate to='/simple' />
    },
    {
      path: '/simple',
      Component: AppSimple
    },
    {
      path: '/tanstack-query',
      Component: AppQuery
    }
  ])
  return <RouterProvider router={router} />
}
