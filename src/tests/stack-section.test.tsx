import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { StackAccordion } from '@/components/stacks/stack-accordion'
import { StackSection } from '@/components/stacks/stack-section'

describe('StackSection', () => {
  it('renders collapsed by default', () => {
    render(
      <StackAccordion>
        <StackSection title="Frontend">
          <span>React</span>
        </StackSection>
      </StackAccordion>
    )

    const button = screen.getByRole('button', { name: 'Frontend' })

    expect(button).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('opens and closes when the section is toggled', () => {
    render(
      <StackAccordion>
        <StackSection title="Frontend">
          <span>React</span>
        </StackSection>
      </StackAccordion>
    )

    const button = screen.getByRole('button', { name: 'Frontend' })

    expect(button).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('opens automatically when defaultOpen is true', async () => {
    render(
      <StackAccordion>
        <StackSection title="Frontend" defaultOpen>
          <span>React</span>
        </StackSection>
      </StackAccordion>
    )

    const button = screen.getByRole('button', { name: 'Frontend' })

    await waitFor(() => {
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })
  })

  it('keeps only one section open at a time', () => {
    render(
      <StackAccordion>
        <StackSection title="Frontend">
          <span>React</span>
        </StackSection>
        <StackSection title="Backend">
          <span>Node.js</span>
        </StackSection>
      </StackAccordion>
    )

    const frontendButton = screen.getByRole('button', { name: 'Frontend' })
    const backendButton = screen.getByRole('button', { name: 'Backend' })

    fireEvent.click(frontendButton)

    expect(frontendButton).toHaveAttribute('aria-expanded', 'true')
    expect(backendButton).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(backendButton)

    expect(frontendButton).toHaveAttribute('aria-expanded', 'false')
    expect(backendButton).toHaveAttribute('aria-expanded', 'true')
  })

  it('throws when used outside StackAccordion', () => {
    const consoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {})

    expect(() =>
      render(
        <StackSection title="Frontend">
          <span>React</span>
        </StackSection>
      )
    ).toThrow('StackSection must be used inside <StackAccordion>')

    consoleError.mockRestore()
  })
})
