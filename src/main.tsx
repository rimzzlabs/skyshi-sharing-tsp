import '@/styles/tailwind.css'

import { queryClient } from '@/query-client'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppRouter } from './route'
import { QueryClientProvider } from '@tanstack/react-query'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  </React.StrictMode>
)
