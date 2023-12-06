import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import "./News.css";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    catagory: "general",
    country : 'in',
  };

  static propTypes = {
    catagory: PropTypes.string,
    country : PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async Update(){
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=25145c3b149b4351825926f5dcc93def&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
   this.Update();
  }

  handleprev = async () => {
    this.setState({page: this.state.page-1});
    this.Update();
  };

  handlenext = async () => {
    this.setState({page: this.state.page+1});
    this.Update();
  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewZap Topheadlines Today</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 my-4 d-flex justify-content-center" key={element.url}>
                  <Newsitem
                    title={element.title}
                    desc={
                      element.description
                        ? element.description.slice(0, 80)
                        : "No description available"
                    }
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt
                    }
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
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pagesize)
            }
            onClick={this.handlenext}
            type="button"
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
