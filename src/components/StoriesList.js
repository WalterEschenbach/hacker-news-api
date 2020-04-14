import React from "react";
import { fetchMainPosts } from "./api";
import StoryContainer from "./StoryContainer";

class StoriesList extends React.Component {
  state = { newsData: null, type: "top", mode: "light" };

  componentDidMount() {
    fetchMainPosts(this.state.type).then((data) =>
      this.setState({ newsData: data })
    );
  }

  handleOnClick = (e) => {
    e.preventDefault();
    const { newsData, error } = this.state;
    if (newsData === null) {
      fetchMainPosts("top").then((data) => this.setState({ newsData: data }));
    } else {
      console.log(newsData, "else");
      this.setState({ type: "new" });
    }
    if (error) {
      throw new Error("There was an error fetching the data.");
    }
  };

  render() {
    return (
      <div>
        <div>Hello World</div>

        <StoryContainer
          storyData={this.state.newsData}
          click={this.handleOnClick}
        />
      </div>
    );
  }
}

export default StoriesList;
