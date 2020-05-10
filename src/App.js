
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { colors } from "Utils";

//part 
import Navbar from "Containers/navbar";
import Home from "Pages/home";
import Author from "Pages/author";
import Works from "Pages/works";
import PostDetail from "Pages/postDetail";



const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <Navbar/>
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
          <Route path="*">
            <p> no match page </p>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;