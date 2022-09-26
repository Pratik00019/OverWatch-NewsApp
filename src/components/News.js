/*eslint eqeqeq:0*/

import React, {useEffect,useState } from 'react'
import LoadingSpinner from './Loading_Spinner';
import Newsitem from './Newsitem'

import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props)=>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  const capitalizeFirstLetter = (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
  } 

  const updateNews = async ()=> {
      props.setProgress(10);
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`; 
      setLoading(true)
      let data = await fetch(url);
      props.setProgress(30);
      let parsedData = await data.json()
      props.setProgress(70);
      setArticles(parsedData.articles)
      setTotalResults(parsedData.totalResults)
      setLoading(false)
      props.setProgress(100);
  }

  useEffect(() => {
      document.title = `${capitalizeFirstLetter(props.category)} - OverWatch`;
      updateNews(); 
      // eslint-disable-next-line
  }, [])


  const fetchMoreData = async () => {   
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
      setPage(page+1) 
      let data = await fetch(url);
      let parsedData = await data.json()
      setArticles(articles.concat(parsedData.articles))
      setTotalResults(parsedData.totalResults)
    };

      return (
          <>
              <h1 className="text-center" style={{paddingTop:'70px'}}>OverWatch - Top {capitalizeFirstLetter(props.category)} Headlines</h1>
              {loading && <LoadingSpinner />}
              <InfiniteScroll
                  dataLength={articles.length}
                  next={fetchMoreData}
                  hasMore={articles.length !== totalResults}
                  loader={<LoadingSpinner/>}
              > 
                  <div className="container">
                       
                  <div className="row">
                      {articles.map((element) => {
                          return <div className="col-md-4" key={element.url}>
                              <Newsitem title={element.title ? element.title : ""} description={element.description ? element.description.slice(0,88) : ""} imageUrl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                          </div>
                      })}
                  </div>
                  </div> 
              </InfiniteScroll>
          </>
      )
  
}
export default News