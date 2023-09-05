import React from 'react';


export default function NewsItem(props) {


    let { title, description, imageUrl, newsUrl, author, date, source } = props;   //way of getting props in function based components by destructuring
    return (
        <div className="card" >
            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger z-1">{!source ? "Unknown" : source}</span>
            <img src={!imageUrl ? "https://www.coindesk.com/resizer/W1fR_lRxXjnsCO3NvkMvbto-4DQ=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/42RQVGEIT5BJ7BMWH4WQILSL2A.jpg" : imageUrl} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
            </div>
        </div>
       
    )

}






