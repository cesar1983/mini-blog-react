import React, { Component } from "react";

import "./Blog.css";
import { Route, NavLink } from "react-router-dom";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" exact activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
                  activeStyle={{ fontSize: "4.0em" }}
                  to={{
                    pathname: "/new-post",
                    hash: "#submit",
                    search: "?quick-search=pele",
                  }}
                >
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        {/* <Route path="/" exact render={() => <Posts />} />
        <Route
          path="/new-post"
          exact
          render={() => (
            <div>
              <h1>New Post</h1>
            </div>
          )}
        /> */}
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" exact component={NewPost} />
      </div>
    );
  }
}

export default Blog;