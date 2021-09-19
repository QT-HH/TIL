import 'components/Layout/Header.styl'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className={'red'}>
      <NavLink exact to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </header>
  )
}

export default Header