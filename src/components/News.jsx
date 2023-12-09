import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import "./News.css";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from "react-top-loading-bar";

const News = (props) => {
  const [Articles, setArticles] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [TotalResults, setTotalResult] = useState(0);
  const [Progress, setProgress] = useState(0);
  const [Page, setPage]=useState(1);

  const Update = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=25145c3b149b4351825926f5dcc93def&page=${Page}&pagesize=${props.pagesize}`;

    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    setArticles(parsedData.Articles);
    setLoading(false);
    setProgress(100);
    setTotalResult(parsedData.TotalResults);
  };

  useEffect(() => {
    Update();
  },);

  const fetchMoreData = async () => {
    setPage(Page + 1 );
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.catagory}&apiKey=25145c3b149b4351825926f5dcc93def&page=${Page}&pagesize=${props.pagesize}`;

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(Articles.concat(parsedData.Articles));
    setTotalResult(parsedData.TotalResults); 
  };

  const Capitalize = (text) => {
    let first = text.toUpperCase().slice(0, 1);
    return first + text.slice(1);
  };

  return (
    <>
      <LoadingBar
        color="#0dcaf0"
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <h2>NewZap Topheadlines - {Capitalize(props.catagory)}</h2>
      {Loading && <Spinner />}
      <InfiniteScroll
        dataLength={Articles.length}
        next={fetchMoreData} 
        hasMore={Articles.length < TotalResults}
        loader={<Spinner />}
        style={{ overflow: "hidden" }}
      >
        <div className="container my-5">
          <div className="row">
            {Articles.map((element) => {
              return (
                <div className="col-md-4 my-4 d-flex justify-content-center">
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
                    newsurl={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  catagory: "general",
  country: "in",
  pagesize:"15",
};

News.propTypes = {
  catagory: PropTypes.string,
  country: PropTypes.string,
};

export default News;
