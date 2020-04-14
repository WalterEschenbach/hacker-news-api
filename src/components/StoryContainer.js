import React from "react";

class StoryContainer extends React.Component {
  state = {};

  render() {
    const { storyData } = this.props;
    return (
      <React.Fragment>
        <div>
          <h2>
            {!storyData
              ? "Loading"
              : storyData.map((post) => <div key={post.id}>{post.title}</div>)}
          </h2>
        </div>
        <div>
          <h3>Jumanji</h3>
        </div>
      </React.Fragment>
    );
  }
}

export default StoryContainer;
