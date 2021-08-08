import React, { Suspense } from 'react'
import { useSelector } from 'react-redux'
import styles from './App.module.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { Loading } from './components/Loading/Loading'

function App() {

  const state = useSelector(state => state.inputsValueReducer)

  return (

    <div className={styles.App}>
      {
        console.log(state)
      }

      <Suspense fallback={<Loading />}>
        <Switch>
          {
            routes.map((item, index) => (
              <Route key={item.id} path={item.path} exact={item.exact} render={() => <item.component />} />
            ))
          }

          <Redirect to={"/"} />
        </Switch>
      </Suspense>

    </div>
  );
}

export default App;
