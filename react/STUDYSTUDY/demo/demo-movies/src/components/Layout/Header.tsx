import 'components/Layout/Header.styl'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <header className={'red'}>
      <NavLink exact to="/">주간 박스오피스</NavLink>
      <NavLink to="/about">이름으로 검색</NavLink>
    </header>
  )
}

export default Header