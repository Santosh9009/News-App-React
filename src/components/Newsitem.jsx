import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let {title, desc, imageurl, newsurl, author, date} = this.props;

    return (
      <div className="card shadow" style={{ width: '20rem'}}>
        <img src={!imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/24A4/production/_131908390_p0gx8qmk.jpg":imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <p className="card-text"><small className="text-muted">Last Updated by : {!author?"unknown":author}</small></p>
          <p className="card-text"><small className="text-muted">Date : {new Date(date).toGMTString()}</small></p>
          <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-info text-white">
            Read More
          </a>
        </div>
      </div>
    );
  }
}

export default Newsitem;
