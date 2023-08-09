import { PageTitle } from './components/page-title'
import { AppLayout } from './layout/app-layout'

import { useQuery } from '@tanstack/react-query'
import { Loader2 } from 'tabler-icons-react'
import { match } from 'ts-pattern'

type Todo = {
  id: number
  userId: number
  title: string
  completed: boolean
}

const loading = () => <Loader2 size={48} className='mt-14 animate-spin mx-auto' />

export default function AppQuery() {
  const query = useQuery(['todos'], {
    queryFn: async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=8')
      if (res.status !== 200) throw new Error(res.statusText)
      const data = (await res.json()) as Todo[]
      return data
    }
  })

  const renderUI = match(query)
    .with({ status: 'loading' }, loading)
    .with({ status: 'success' }, (data) => {
      return data.data.map((todo) => {
        return (
          <div key={todo.id} className='py-3 first-of-type:pt-0 last-of-type:pb-0'>
            <p className='font-bold mb-1'>{todo.title}</p>
            <p>
              {match(todo.completed)
                .with(true, () => 'selesai')
                .otherwise(() => 'belum')}
            </p>
          </div>
        )
      })
    })
    .otherwise(() => 'Yaha, ada yang salah')

  return (
    <AppLayout title='Query Matching'>
      <PageTitle>Matching with Tanstack Query</PageTitle>
      <div className='py-6'>{renderUI}</div>
    </AppLayout>
  )
}
