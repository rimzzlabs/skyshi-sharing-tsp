import { NavLink } from 'react-router-dom'

type HeaderProps = {
  title: string
}

export const Header = (props: HeaderProps) => {
  const items = [
    { name: 'Simple', href: '/simple' },
    { name: 'Tanstack Query', href: '/tanstack-query' },
    { name: 'React Redux', href: '/react-redux' }
  ]

  return (
    <header className='fixed top-0 inset-x-0 bg-white border-b z-50'>
      <div className='layout flex items-center justify-between h-14'>
        <p className='font-bold'>{props.title}</p>

        <nav className='flex items-center space-x-2'>
          {items.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) => (isActive ? 'underline text-blue-600' : '')}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
