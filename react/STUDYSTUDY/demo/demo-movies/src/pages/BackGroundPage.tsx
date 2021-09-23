import Layout from 'components/Layout/Layout'
import Home from 'pages/Home'
import About from 'pages/About'
import { Route } from 'react-router-dom'

const BackGroundPage = () => {
  return (
    <Layout>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
    </Layout>
  )
}

export default BackGroundPage