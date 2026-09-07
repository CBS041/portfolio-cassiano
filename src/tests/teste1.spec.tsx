import { render, screen } from '@/lib/test-utils'

describe('Teste', () => {
  it('deve passar', () => {
    render(<div>Teste</div>)

    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
