import { renderReact } from 'hypernova-react'
import _App from './components/App'
import _Header from './components/Header'

export const App = renderReact('App', _App)
export const Header = renderReact('Header', _Header)
