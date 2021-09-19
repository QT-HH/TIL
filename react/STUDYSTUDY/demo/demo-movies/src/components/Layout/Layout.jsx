import Header from 'components/Layout/Header.jsx'
import Footer from 'components/Layout/Footer.jsx'

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