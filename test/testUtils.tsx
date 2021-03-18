import { ReactElement } from 'react'
import { render, RenderResult } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import theme from 'src/theme'

const Providers = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options = {}): RenderResult =>
  render(ui, { wrapper: Providers, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
