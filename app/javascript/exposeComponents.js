import { renderReact } from 'hypernova-react'
import _App from './components/App'
import _About from './components/About'
import _Header from './components/Header'

export const App = renderReact('App', _App)
export const About = renderReact('About', _About)
export const Header = renderReact('Header', _Header)
