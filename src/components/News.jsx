import React, { Component } from "react";
import Newsitem from "./Newsitem";
import './News.css';

export class News extends Component {
  
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount(){
    let url='https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25145c3b149b4351825926f5dcc93def';
    let data = await fetch(url);
    let parsedData=await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewZap Topheadlines Today</h2>
        <div className="row m-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  desc={element.description ? element.description.slice(0, 80) : 'No description available'}
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
