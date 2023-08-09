export const PageTitle = (props: React.PropsWithChildren) => {
  return (
    <div>
      <h1 className='text-center font-bold text-4xl/tight mb-1'>{props.children}</h1>
      <hr />
    </div>
  )
}
