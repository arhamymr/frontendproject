
import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { width, colors } from "Utils"
import { gsap } from "gsap";

//part
import Navbar from "Containers/navbar";
import { Loading } from "Elements";

// offline
import { Offline } from "react-detect-offline";

const Home = lazy(() => import("Pages/home"))
const Blogs = lazy(() => import("Pages/blogs"))
const Me = lazy(() => import("Pages/me"))
const Illustrations = lazy(() => import("Pages/illustrations"))
const Threedmodels = lazy(() => import("Pages/3dmodels"))
const PostDetail = lazy(() => import("Pages/postDetail"))
const NotFound = lazy(() => import("Pages/404"))

const Load = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
const WrapApp = styled.div`
  opacity:0;
  padding: 12px;
`

const BoxOffline = styled.div`
  width: 100%;
  padding: 16px;
  text-align: center;
  font-size: 15px;
  background-color: ${colors.primary };
  color: ${colors.white };
`

const LoadingContent = () => ( <Load> Loading </Load>);

const App = () => {
  const [spinner, setSpinner] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setSpinner(false)
      gsap.to(".app", 1, {opacity:1})
    }, 3000)
  }, [])

  return (
    <>
    <Offline>
      <BoxOffline>Youre offline right now. Check your connection.</BoxOffline>
    </Offline>
    { spinner && <Loading/> }
    { !spinner &&
      <WrapApp className="app">
      <Router>
      <ThemeProvider theme={colors}>
        <Navbar/>
        <Suspense fallback={<LoadingContent/>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/me">
              <Me />
            </Route>
            <Route exact path="/Illustrations">
              <Illustrations />
            </Route>
            <Route exact path="/3dmodels">
              <Threedmodels />
            </Route>
            <Route path="/blogs">
              <Blogs/>
            </Route>
            <Route path="/post/:id">
              <PostDetail/>
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Suspense>
      </ThemeProvider>
    </Router>
    </WrapApp>
    }
    </>
  );
}

export default App;
