import React from 'react'
import { Route, Switch, Redirect, Router } from 'react-router-dom'
import history from './utils/history'

import Layout from './page/Layout'
export default function App() {
  return (
    <div id="root">
      <Router history={history}>
        <Layout></Layout>
      </Router>
    </div>
  )
}
