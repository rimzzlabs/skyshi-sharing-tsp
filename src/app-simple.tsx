import { PageTitle } from '@/components/page-title'

import { AppLayout } from '@/layout/app-layout'

import { Button } from './components/button'

import { useState } from 'react'
import { P, match } from 'ts-pattern'

export default function AppSimple() {
  const [value, setValue] = useState<string>('')

  return (
    <AppLayout title='Simple Matching'>
      <PageTitle>TS Pattern with Simple Match</PageTitle>
      <div className='mt-4 flex items-end space-x-2'>
        <div className='w-full space-y-1'>
          <label htmlFor='superhero-name'>
            Buah apa yang dijuluki &quot;Raja&quot; di Indonesia?
          </label>
          <input
            type='text'
            placeholder='Masukkan nama buah-buahan'
            className='w-full'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <Button>Check</Button>
      </div>

      <p className='text-center my-8'>
        {match(value.toLowerCase())
          .with('', () => 'Menunggu')
          .with(P.string.includes('durian'), () => '✅ kamu benar')
          .with(P.string.includes('manggis'), () => 'Manggis mungkin ratu buah!')
          .otherwise(() => '❌ kamu salah')}
      </p>
    </AppLayout>
  )
}
//
//
//
//
//
//
//
//
//
//
// {
//   value === ''
//     ? 'Menunggu'
//     : value.toLowerCase().includes('durian')
//     ? '✅ kamu benar'
//     : value.toLowerCase().includes('manggis')
//     ? 'Cukup dekat, manggis mungkin ratu buah'
//     : value.toLowerCase().includes('anggur')
//     ? 'Kamu suka anggur?'
//     : '❌ kamu salah'
// }
//
