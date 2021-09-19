import Header from 'components/Layout/Header.jsx'
import Footer from 'components/Layout/Footer.jsx'
import 'components/Layout/Layout.styl'

const Layout = (props) => {
  return (
    <>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer />
    </>
  )
}

export default Layout