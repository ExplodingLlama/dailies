import React, { Component } from "react";
import axios from "axios";

class DailyPage extends React.Component {
  state = {
    daily: {}
    // feed: { image: {} }
  };
  componentDidMount() {
    axios
      .get(`/getDaily/${this.props.dailyId || ""}`)
      .then(response => {
        this.setState({ daily: response.data });
      })
      .catch(err => {
        console.log("error", err);
      });
  }
  render() {
    return (
      <div>
        <div style={{ fontSize: 42, width: "100%", justifyContent: "center" }}>
          {this.state.daily.heading}
        </div>
        <img style={{ width: "100%" }} src={this.state.daily.photo_link} />
      </div>
    );
  }
}

export default DailyPage;
