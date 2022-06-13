import { render, RenderOptions } from '@testing-library/react'
import { ReactElement } from 'react'
import { ThemeProvider } from 'styled-components'
import {ArticleContextType, ArticleContext, ArticleProvider} from 'context/articleContext'
import theme from 'styles/theme'

type CustomRenderProps = Omit<RenderOptions, 'queries'>

const customRender = (
	ui: ReactElement,
	providerProps?: ArticleContextType,
	{
		...renderOptions
	}: CustomRenderProps = {}
) =>

	providerProps ?
		render(
		<ThemeProvider theme={theme}>
			<ArticleContext.Provider value={providerProps}>
				{ui}
			</ArticleContext.Provider>
		</ThemeProvider>,
		renderOptions
		) :
		render(
			<ThemeProvider theme={theme}>
				<ArticleProvider>
					{ui}
				</ArticleProvider>
			</ThemeProvider>,
			renderOptions
		)


export * from '@testing-library/react'
export { customRender as render }
