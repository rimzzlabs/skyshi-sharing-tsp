import { Header } from '@/components/header'

export const AppLayout = ({ title, children }: React.PropsWithChildren<{ title: string }>) => {
  return (
    <>
      <Header title={title} />
      <div className='layout pt-20'>{children}</div>
    </>
  )
}
