import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
            <h2>News Spider - Top Headlines</h2>
            <div className="row">
                <div className="col-md-4">
                    <NewsItem title='mytitle' description='mydescription' imageUrl="https://i.ytimg.com/vi/OmoRSF1Ta6A/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBIrzwsEadXR3vvauNkTzj52HaIsw"></NewsItem>
                </div>
                <div className="col-md-4">
                    <NewsItem title='mytitle' description='mydescription'></NewsItem>
                </div>
                <div className="col-md-4">
                    <NewsItem title='mytitle' description='mydescription'></NewsItem>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default News
