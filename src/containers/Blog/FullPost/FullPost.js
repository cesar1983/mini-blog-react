import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null,
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    const postId = this.props.match.params.id;
    if (postId) {
      if (!this.state.loadedPost || this.state.loadedPost.id !== +postId)
        axios.get("/posts/" + postId).then((response) => {
          this.setState({ loadedPost: response.data });
        });
    }
  }

  deletePostHandler = () => {
    console.log("deleting a post...");
    axios.delete("/posts/" + this.props.match.params.id).then((response) => {
      console.log(response.data);
    });
  };

  render() {
    const postId = this.props.match.params.id;

    let post = (
      <p style={{ marginTop: "100px", textAlign: "center" }}>
        Please select a Post!
      </p>
    );

    if (postId) {
      post = (
        <p style={{ marginTop: "100px", textAlign: "center" }}>Loading...</p>
      );
    }
    if (this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button className="Delete" onClick={() => this.deletePostHandler()}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
