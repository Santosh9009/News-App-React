import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewZap - Topheadlines Today</h2>
        <div className="row">
          <div className="col-md-3">
            <Newsitem title={"lol"} desc={"fklsjfkljsdklfjlksdjflkdsj"} />
          </div>
          <div className="col-md-3">
            <Newsitem title={"lol"} desc={"fklsjfkljsdklfjlksdjflkdsj"} />
          </div>
          <div className="col-md-3">
            <Newsitem title={"lol"} desc={"fklsjfkljsdklfjlksdjflkdsj"} />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
