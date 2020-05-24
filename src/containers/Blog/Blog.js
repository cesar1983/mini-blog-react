import React, { Component } from "react";

import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

import Posts from "./Posts/Posts";
//import NewPost from "./NewPost/NewPost";

// Componente criado para Lazy Loading, de forma assincrona
import asyncComponent from "../../hoc/asyncComponent";
const AsyncNewPost = asyncComponent(() => {
  return import("./NewPost/NewPost"); // New post quase nunca é acessado, então só é carregado quando precisa.
});

class Blog extends Component {
  state = {
    auth: true,
  };

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/posts" exact activeClassName="active">
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName="active"
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
        <Switch>
          {/* Guard ( autorização ) */}
          {this.state.auth ? (
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}

          {/* Guard option  , se quiser bloquear tudo que nao tem PATH */}
          <Route path="/posts" component={Posts} />
          <Route render={() => <h1>Not Found</h1>} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
