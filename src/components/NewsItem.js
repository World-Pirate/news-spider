import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, name, author, date} = this.props;
    return (
      <div>
        <div className="card mx-1 my-1">
            <img src={imageUrl} className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-muted">By {author?author:name} <br/> On {date}</small></p>
                <div className="text-center">
                  <a href={newsUrl} target="_blank" className="btn btn-sm btn-light">Read More</a>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem