import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title, desc, imageurl, newsurl} = this.props;

    return (
      <div className="card" style={{ width: '18rem' }}>
        <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/24A4/production/_131908390_p0gx8qmk.jpg":imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href={newsurl} target="_blank" className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
