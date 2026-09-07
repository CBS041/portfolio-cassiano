import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'

type ICustomRender = {
  ui: ReactElement
  options?: Omit<RenderOptions, 'wrapper'>
}

function customRender({ ui, options }: ICustomRender) {
  render(ui, { ...options })
}

export * from '@testing-library/react'
export { customRender as render }
