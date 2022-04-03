import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from 'src/theme'

ReactDOM.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </ChakraProvider>,
  document.getElementById('root')
)
