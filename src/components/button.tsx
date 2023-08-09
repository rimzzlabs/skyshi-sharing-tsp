import { tv, type VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'py-2 px-3 font-medium transition rounded',
  variants: {
    color: {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
      secondary: 'bg-neutral-600 text-white hover:bg-neutral-700 active:bg-neutral-800',
      danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800'
    }
  },
  defaultVariants: {
    color: 'primary'
  }
})

type ButtonVariant = VariantProps<typeof button>
type ButtonProps = React.ComponentProps<'button'> & ButtonVariant

export const Button = ({ className, color, ...props }: ButtonProps) => {
  return <button className={button({ className, color })}>{props.children}</button>
}
