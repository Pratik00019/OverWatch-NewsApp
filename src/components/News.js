/*eslint eqeqeq:0*/

import React, { Component } from 'react'
import LoadingSpinner from './Loading_Spinner';
import Newsitem from './Newsitem'


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
    document.title=`${this.capitalizeFirstLetter(this.props.category)}- OverWatch News`
  }
  async updateNews(){
    let api = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e3b0610a63664a2890133eb85b029e35&page=${this.state.page}&pagesize=${this.props.pagesize}`;
    this.setState({loading:true})
    let data = await fetch(api);
    let parsedata = await data.json();
    this.setState({
      articles: parsedata.articles,
      totalResults: parsedata.totalResults, 
      loading:false
    })
   
  }
  async componentDidMount() {
    this.updateNews()
  }
  handleonnext = async () => {
    this.setState({page:this.state.page + 1})
    this.updateNews()

}

  handleonprevious = async () => {
    this.setState({page:this.state.page - 1})
    this.updateNews()
  }
  
  render() {

    return (
      <div className="container my-3 ">
        <h1 className="text-center">OverWatch {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
        
       {this.state.loading && <LoadingSpinner/>}
        <div className="row">

          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              < Newsitem title={element.title ? element.title.slice(0, 44) : ""} description={element.description ? element.description.slice(0, 88) : ""} urlImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>
          })}
          <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page <= 1} onClick={this.handleonprevious} className="btn btn-dark">&larr; Previous  </button>
            <button type="button" disabled ={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} className="btn btn-dark" onClick={this.handleonnext}>Next  &rarr;</button>
          </div>
        </div>
      </div>

    )
  }

}

export default News