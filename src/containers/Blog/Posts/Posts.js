import React, { Component } from "react";
import axios from "../../../axios";
// import { Link } from "react-router-dom";

import Post from "../../../components/Post/Post";

import "./Posts.css";

class Posts extends Component {
  state = {
    posts: [],
    selectedPostId: false,
  };

  componentDidMount() {
    console.log(this.props);

    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 8);
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Cesar",
          };
        });
        // console.log(response);
        this.setState({ posts: updatedPosts });
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  handlePostClick = (postId) => {
    this.props.history.push("posts/" + postId);
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post, key) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.handlePostClick(post.id)}
          />
        );
      });
    }

    return (
      <div className="Posts-Content">
        <section className="Posts">{posts}</section>
      </div>
    );
  }
}

export default Posts;
