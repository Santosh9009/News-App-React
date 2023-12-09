import React from "react";

const Newsitem=(props)=> {

    return (
      <div className="card shadow" style={{ width: '20rem'}}>
        <img src={!props.imageurl?"https://ichef.bbci.co.uk/news/1024/branded_news/24A4/production/_131908390_p0gx8qmk.jpg":props.imageurl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text"><small className="text-muted">Last Updated by : {!props.author?"unknown":props.author}</small></p>
          <p className="card-text"><small className="text-muted">Date : {new Date(props.date).toGMTString()}</small></p>
          <a href={props.newsurl} target="_blank" rel="noreferrer" className="btn btn-info text-white">
            Read More
          </a>
        </div>
      </div>
    );
  }


export default Newsitem;
