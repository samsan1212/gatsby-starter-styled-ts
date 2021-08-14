/* eslint-disable  */
import { Provider } from "react-redux"

import { ThemeProvider } from "styled-components"
import theme from "./src/utils/styles/theme.styled"

import getStore from "./src/domains/redux/store"

import "./src/utils/styles/reset.css"
import "./src/utils/styles/global.css"

export default ({ element }) => {
  const store = getStore()
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <>{element}</>
      </Provider>
    </ThemeProvider>
  )
}
