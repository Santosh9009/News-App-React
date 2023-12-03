import React, { Component } from "react";
import Newsitem from "./Newsitem";
import "./News.css";

export class News extends Component {
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25145c3b149b4351825926f5dcc93def&page=1&pagesize=15";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,
      totalResults :parsedData.totalResults,
    });
  }

  handleprev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25145c3b149b4351825926f5dcc93def&page=${
      this.state.page - 1
    }&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  };

  handlenext = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25145c3b149b4351825926f5dcc93def&page=${
      this.state.page + 1
    }&pagesize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewZap Topheadlines Today</h2>
        <div className="row my-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title}
                  desc={
                    element.description
                      ? element.description.slice(0, 80)
                      : "No description available"
                  }
                  imageurl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            onClick={this.handleprev}
            type="button"
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/15)} onClick={this.handlenext} type="button" className="btn btn-dark">
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
