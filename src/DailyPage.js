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
  goBack = () => {
    window.location = window.location.origin + "/" + this.state.daily.previous;
  };
  goForward = () => {
    window.location = window.location.origin + "/" + this.state.daily.next;
  };
  render() {
    return (
      <div>
        <div
          style={{
            fontSize: 42,
            width: "100%",
            justifyContent: "center",
            padding: 16,
            fontFamily: "League Spartan"
          }}
        >
          {this.state.daily.heading}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: 16
          }}
        >
          {this.state.daily.previous &&
            this.state.daily.previous != "" && (
              <div
                onClick={this.goBack}
                style={{
                  padding: 16,
                  justifyContent: "center",
                  fontFamily: "League Spartan",
                  backgroundColor: "#ffdd59",
                  borderRadius: 5
                }}
              >
                Previous
              </div>
            )}
          {this.state.daily.next &&
            this.state.daily.next != "" && (
              <div
                onClick={this.goForward}
                style={{
                  padding: 16,
                  marginLeft: 16,
                  justifyContent: "center",
                  fontFamily: "League Spartan",
                  backgroundColor: "#ffdd59",
                  borderRadius: 5
                }}
              >
                Next
              </div>
            )}
        </div>
        <img style={{ width: "100%" }} src={this.state.daily.photo_link} />
      </div>
    );
  }
}

export default DailyPage;
