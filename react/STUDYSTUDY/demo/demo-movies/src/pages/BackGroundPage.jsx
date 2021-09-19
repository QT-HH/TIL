import Layout from 'components/Layout/Layout.jsx'
import Home from 'pages/Home.jsx'
import About from 'pages/About.jsx'
import { Route } from 'react-router-dom'
// import { BrowserRouter } from 'react-router-dom'

const BackGroundPage = () => {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  )
}

export default BackGroundPage