import React, { Suspense } from 'react'
import styles from './App.module.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { Loading } from './components/Loading/Loading'

function App() {

  return (

    <div className={styles.App}>

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
