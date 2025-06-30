import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export class News extends Component {

  static defaultProps = {
    country: "us",
    pageSize: 6,
    category: "general"
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor(props) {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    
  }

  async componentDidMount(props) {
    this.fetchNews();
    document.title=`${this.props.category}-NewsMonkey`;
  }

  fetchNews = async (page = this.state.page) => {
  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87502dbcc8ef4ccca83c7f9b5879cd43&page=${page}&pageSize=${this.props.pageSize}`;
  this.setState({ loading: true });

  try {
    this.props.setprogress(10);
    let data = await fetch(url);
    this.props.setprogress(30);
    let parsedData = await data.json();
    this.props.setprogress(50);
    this.setState({
      articles: parsedData.articles,
      loading: false,
      totalResults: parsedData.totalResults,
      page: page
    });
    this.props.setprogress(100);
  } catch (error) {
    console.error("Error fetching news:", error);
    this.setState({ loading: false });
  }
};

  handlenextclick = () => {
    if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.fetchNews(this.state.page + 1);
    }
  };

  handleprevclick = () => {
    if (this.state.page > 1) {
      this.fetchNews(this.state.page - 1);
    }
  };

  render() {
    const defaultImage = "https://ichef.bbci.co.uk/ace/branded_news/1200/cpsprodpb/7381/live/9cf4ed00-51ab-11f0-a2ff-17a82c2e8bc4.jpg";

    return (
      <div className='container my-3'>
        <h2 className="text-center">
          Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} Headlines - {this.props.country.toUpperCase()}
        </h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title.slice(0, 44) : "No Title"}
                  description={element.description ? element.description.slice(0, 88) : "No Description Available"}
                  imageUrl={element.urlToImage ? element.urlToImage : defaultImage}
                  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handleprevclick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page >= Math.ceil(this.state.totalResults / this.props.pageSize)}
            type="button"
            className="btn btn-dark"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
