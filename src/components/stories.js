import React from "react";
import { fetchMainPosts } from "./api";

class Stories extends React.Component {
  state = { newsData: null };

  handleOnClick = (e) => {
    e.preventDefault();
    const { newsData, error } = this.state;
    if (!newsData) {
      fetchMainPosts("top").then((data) => this.setState({ newsData: data }));
    } else {
      console.log(newsData, "else");
    }
    if (error) {
      throw new Error("There was an error fetching the data.");
    }
  };

  render() {
    const { newsData } = this.state;
    return (
      <div>
        <div>Hello World</div>
        <button onClick={this.handleOnClick}></button>
        {newsData === null
          ? "hello"
          : newsData.map((post) => <div key={post.id}>{post.by}</div>)}
      </div>
    );
  }
}

export default Stories;
