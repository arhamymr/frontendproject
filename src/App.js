
import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "Utils";

//part 
import Navbar from "Containers/navbar";

const Home = lazy(() => import("Pages/home")) 
const Author = lazy(() => import("Pages/author"))
const Works = lazy(() => import("Pages/works"))
const PostDetail = lazy(() => import("Pages/postDetail"))
const Store = lazy(() => import("Pages/store"))
const NotFound = lazy(() => import("Pages/404"))

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>    
        <Navbar/>
        <Suspense fallback={<p> loading </p>}>
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
  );
}

export default App;