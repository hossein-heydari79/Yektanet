import React, { Suspense, useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from './App.module.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import { routes } from './routes'
import { Loading } from './components/Loading/Loading'
import { ToastContainer, toast } from 'react-toastify';

function App() {

  // useEffect(() => {
  //   toast.success('Welcome To My App :)', {
  //     position: "bottom-left",
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //   });
  // }, [])


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
