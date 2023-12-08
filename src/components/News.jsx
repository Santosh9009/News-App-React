import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import "./News.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'

export class News extends Component {
  static defaultProps = {
    catagory: "general",
    country: "in",
  };

  static propTypes = {
    catagory: PropTypes.string,
    country: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      Progress : 10,
    };
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=25145c3b149b4351825926f5dcc93def&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      Progress : 100,
    });
    console.log(this.state.articles.length+" "+this.state.totalResults);
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.catagory}&apiKey=25145c3b149b4351825926f5dcc93def&page=${this.state.page}&pagesize=${this.props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
    });
  };

  Capitalize = (text) => {
    let first = text.toUpperCase().slice(0, 1);
    return first + text.slice(1);
  };

  render() {
    return (
      <>
       <LoadingBar color='#0dcaf0' progress={this.state.Progress}
    onLoaderFinished={() => this.setState({Progress:0})} />
        <h2>NewZap Topheadlines - {this.Capitalize(this.props.catagory)}</h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
          style={{overflow:"hidden"}}
        >
          <div className="container my-5">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div
                    className="col-md-4 my-4 d-flex justify-content-center"
                  >
                    <Newsitem
                      title={element.title}
                      desc={
                        element.description
                          ? element.description.slice(0, 80)
                          : "No description available"
                      }
                      imageurl={element.urlToImage}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default News;
