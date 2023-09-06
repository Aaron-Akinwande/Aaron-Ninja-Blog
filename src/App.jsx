import { useState } from "react";
import "./App.css";

import React from "react";
import Navbar from "./navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./create";
import BlogDetails from "./BlogDetails";
import NotFounf from "./NotFounf";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center">
        <Navbar></Navbar>
        <div className="max-w-xl m-10 p-5">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*">
              <NotFounf></NotFounf>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
