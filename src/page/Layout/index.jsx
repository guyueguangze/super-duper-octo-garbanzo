import React, { lazy, Suspense } from 'react'
import { Route, Switch, useHistory, Redirect } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { side } from './side'
import styles from './index.module.scss'
const { Header, Content, Sider } = Layout
const Quantum = lazy(() => import('../quantum'))
const Qcode = lazy(() => import('../Qcode'))
export default function MyLayout() {
  const history = useHistory()
  const slideBarMenu = side.map((item) => ({
    key: item.key,
    label: item.label,
    onClick: (info) => history.push(info.key),
  }))
  return (
    <div className={styles.root} id="root">
      <Layout>
        <Layout>
          <Sider>
            <Menu
              theme="light"
              mode="inline"
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={slideBarMenu}
            />
          </Sider>
          <Layout>
            <Content>
              <Suspense>
                <Switch>
                  <Route path="/quantum" component={Quantum}></Route>
                  <Route path="/qcode" component={Qcode}></Route>
                  <Route
                    path="/"
                    render={() => <Redirect to="/quantum" />}
                    exact
                  />
                </Switch>
              </Suspense>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  )
}
