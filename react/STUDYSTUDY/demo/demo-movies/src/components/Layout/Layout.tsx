import Header from 'components/Layout/Header'
import Footer from 'components/Layout/Footer'
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