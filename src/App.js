
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

// offline
import { Offline } from "react-detect-offline";
import styled from "styled-components"

const BoxOffline = styled.div`
    width: 100%;
    padding: 16px;
    text-align: center;
    background-color: ${({theme}) => theme.primary };
    color: ${({theme}) => theme.white };
`

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={colors}>
        <Offline>
            <BoxOffline>
                Youre offline right now. Check your connection.
            </BoxOffline>
        </Offline>
            
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