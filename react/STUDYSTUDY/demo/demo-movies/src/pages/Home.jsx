import React from 'react';
import { Route } from 'react-router-dom'
import Test from 'pages/Test'

const Home = ({ match }) => {
  return (
    <>
      <h1>I'm home!!</h1>
      <Route path={`${match.path}/test`} component={Test} />
    </>
  )
}

export default Home