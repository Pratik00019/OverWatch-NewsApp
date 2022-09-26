/*eslint eqeqeq:0*/

import React, { Component } from 'react'
import LoadingSpinner from './Loading_Spinner';
import Newsitem from './Newsitem'

import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);

    this.state = {
      articles: [],
      loading: true,
      page: 1,
    }
    document.title = `${this.capitalizeFirstLetter(this.props.category)}- OverWatch News`
  }
  async updateNews() {
    this.props.setProgress(10);
    const api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;    this.setState({ loading: false })
    this.setState({loading:true})
    let data = await fetch(api);
    this.props.setProgress(30);
    let parsedata = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults,
      loading: false
    })
    this.props.setProgress(100);
  }
  async componentDidMount() {
    this.updateNews()
    this.setState({ page: this.state.page + 1 })
  }
  // handleonnext = async () => {
  //   this.setState({ page: this.state.page + 1 })
  //   this.updateNews()

  // }

  // handleonprevious = async () => {
  //   this.setState({ page: this.state.page - 1 })
  //   this.updateNews()
  // }
  fetchMoreData = async ()=>{
   
    this.setState({ page: this.state.page + 1 })
    const api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pagesize=${this.props.pagesize}`;    this.setState({ loading: false })
    let data = await fetch(api);
    let parsedata = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults: parsedata.totalResults,
      loading: true
    })
   
  }
  render() {

    return (
      <>
        <h1 className="text-center my-2">OverWatch {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={this.state.loading&&<LoadingSpinner></LoadingSpinner>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return <div className="col-md-4" key={element.url}>
                < Newsitem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
              </div>
            })}
            </div>
          </div>
        </InfiniteScroll>
        
      
      </>
    )
  }

}

export default News