import React from "react";
import { fetchMainPosts } from "../utils/api";
import Loading from "./Loading";
import PostList from "./PostList";

export default class Posts extends React.Component {
  state = {
    posts: null,
    error: null,
    loading: true,
  };
  componentDidMount() {
    this.handleFetch();
  }
  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.handleFetch();
    }
  }
  handleFetch() {
    this.setState({
      posts: null,
      error: null,
      loading: true,
    });

    fetchMainPosts(this.props.type)
      .then((posts) =>
        this.setState({
          posts,
          loading: false,
          error: null,
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          loading: false,
        })
      );
  }
  render() {
    const { posts, error, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }

    return <PostList posts={posts} />;
  }
}
