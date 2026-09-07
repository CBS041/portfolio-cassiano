type NavButtonProps = {
  label: string
  onClick: () => void
  className?: string
}

export function NavButton({ label, onClick, className }: NavButtonProps) {
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  )
}
