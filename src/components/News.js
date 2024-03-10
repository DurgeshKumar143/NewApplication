import React, { useEffect, useState } from "react";
import NewsItems from "./NewsItems";
import Spinners from "./Spinners";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totaleResults, setTotaleResults] = useState(0);

  

  const capitalice = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const update = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    

    props.setProgress(70);

    setArticles(parsedData.articles);
    setTotaleResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
     
  };

  useEffect(() => {
     document.title=`${capitalice(props.category)} -- NewsMonkey`
    update();
  }, []);

  


  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();

    setArticles(articles.concat(parsedData.articles));
    setTotaleResults(parsedData.totalResults);
    setLoading(false);
     
  };

  return (
    <>
      <h3 className="text-warning">Page No : {page}</h3>
      <h2 className="my-4 text-center">
        {" "}
        NewsMonkey - Top{" "}
        <span className="text-success">
          {" "}
          {capitalice(props.category)}{" "}
        </span>{" "}
        Headlines
      </h2>
      {loading && <Spinners />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totaleResults}
        loader={loading && <Spinners />}
      >
        <div className="container">
          <div className="row ">
            {articles.map((element) => {
              return (
                <div className="col-lg-4  col-sm-12 col-md-6" key={element.url}>
                  <NewsItems
                    title={element.title ? element.title.slice(0, 45) :" "}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgUrl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between">
          
            <button type='button' disabled={(this.state.page<=1)} className="btn btn-dark" onClick={this.handlePreClick}>&larr;Previous</button>
            <button type='button' disabled={this.state.page + 1 >  Math.ceil(this.state.totaleResults/props.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
          
        </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
