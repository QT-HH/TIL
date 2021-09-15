import Header from 'components/Layout/Header.js'
import Footer from 'components/Layout/Footer.js'

const Layout = (props) => {
  return (
    <div>
      <Header />
      <main>
        { props.children }
      </main>
      <Footer />
    </div>
  )
}

export default Layout