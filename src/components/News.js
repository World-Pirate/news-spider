// 56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=tech&from=2023-05-05&to=2023-05-05&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=ipl&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// https://newsapi.org/v2/top-headlines?q=stock&from=2023-05-02&to=2023-05-02&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb
// &page=2
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Loading from './Loading'

export class News extends Component {
  static defaultProps = {
    category: 'general',
    country: 'in',
    pageSize: 9
  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
  }

  async updatenews(){
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&sortBy=popularity&apiKey=56f164ae46b74c39914c176a020f49fb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount(){
    this.updatenews();
  }

  handlePrevCLick = async ()=>{
    await this.setState({page: this.state.page-1});
    this.updatenews();
  }
  
  handleNextCLick = async ()=>{
    await this.setState({page: this.state.page+1});
    this.updatenews();
  }

  render(){
    return (
        <div className="container my-3">
            <h1 className="text-center my-4">News Spider - Top Headlines</h1>
            {this.state.loading && <Loading/>}
            <div className="d-flex justify-content-between my-1">
              <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevCLick}>&larr; Previous</button>
              <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextCLick}>Next &rarr;</button>
            </div>
            <div className="row">
                {!this.state.loading && this.state.articles.map((element) => {
                  return <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem title={element.title} description={element.description? element.description : ''} name={element.source.name} author={element.author} date={element.publishedAt} imageUrl={element.urlToImage?element.urlToImage:'https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB-xKz554go0O4Ypk0Zkr75ns1lfw'} newsUrl={element.url}></NewsItem>
                    {/* <NewsItem title={element.title.slice(0,60)} description={element.description.slice(0,150)} imageUrl={element.urlToImage?element.urlToImage:'https://i.ytimg.com/vi/-mJFZp84TIY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB-xKz554go0O4Ypk0Zkr75ns1lfw'} newsUrl={element.url}></NewsItem> */}
                  </div>
                })}
            </div>
            <div className="d-flex justify-content-between my-1">
              <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevCLick}>&larr; Previous</button>
              <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-primary" onClick={this.handleNextCLick}>Next &rarr;</button>
            </div>

        </div>
    )
  }
}

export default News