import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News1(props) {

    // initailizing states
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);





    useEffect(() => {
        document.title=`NewsMonkey - ${props.category} HeadLines`
        return async () => {

            props.setProgress(10);
            //use to load api before page load so that renders data easily and smoothly but old method ---now use useeffect hook instead of this
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true);
            let data = await fetch(url);
            let parsedData = await data.json();
            setLoading(false);
            setTotalResults(parsedData.totalResults);
            setArticles(parsedData.articles);
            props.setProgress(100);
        }
        // eslint-disable-next-line
    },[ ])

    const fetchMoreData = async () => {
        // first two line is solution of duplicate news error
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        //  this.setState({loading: false,});
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles));
    };


    return (
        <>
            <h1 className='my-5 text-center'>NewsMonkey - {props.category} HeadLines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                style={{ overflow: 'none' }}
            >
                < div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3 px-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div >
            </InfiniteScroll >



        </>
    )

}
News1.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
}
News1.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}

