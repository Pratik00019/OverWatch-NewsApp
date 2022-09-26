
import React from 'react'

const Newsitem=(props)=>  {
        let {title,description,imageUrl,url,author,date,source}=props;
        return (
                <div className='my-3'>
                    <div className="card ">
                    <span className="position-absolute top-10 start-50 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1' }}>{source}</span>
                        <img src={!imageUrl?"https://c.ndtvimg.com/2022-08/muvr4tq_rupee-generic-reuters_625x300_05_August_22.jpg":imageUrl} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description}...</p>
                                <a href={url} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                                <p className="card-text"><small className="text-muted">By {author?author:'Unknown'} on {new Date(date).toGMTString()}</small></p>
                            </div>
                    </div>
                </div>
                

        
        )

}

export default Newsitem