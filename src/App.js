
import React, { Suspense, lazy, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { colors } from "Utils";
import { gsap } from "gsap";

//part 
import Navbar from "Containers/navbar";
import { Loading } from "Elements";

const Home = lazy(() => import("Pages/home")) 
const Author = lazy(() => import("Pages/author"), 3000)
const Works = lazy(() => import("Pages/works"))
const PostDetail = lazy(() => import("Pages/postDetail"))
const Store = lazy(() => import("Pages/store"))
const NotFound = lazy(() => import("Pages/404"))


const WrapApp = styled.div`
    opacity:0;
`
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
    { spinner && <Loading/> }
    { !spinner && 
      <WrapApp className="app">
      <Router>
      <ThemeProvider theme={colors}>    
        <Navbar/>
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/author">
              <Author />
            </Route>
            <Route path="/post/:id">
              <PostDetail/>
            </Route>
             <Route path="/works">
              <Works />
            </Route>
            <Route path="/store">
              <Store />
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