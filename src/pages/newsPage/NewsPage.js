import React, { useEffect } from "react";
import "./stylesNewsPage.css";
import connect from "react-redux/es/connect/connect";
import { setNewsAsync } from "../../store/actions/setNews";
import Loader from "../../components/loader/Loader";
const NewsPage = (props) => {
  useEffect(() => {
    const { setNewsAsync } = props;
    setNewsAsync();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container is-widescreen hero fullheight news_wrapper">
      {props.loader ? (
        <Loader />
      ) : (
        <>
          {props.news.map((item, index) => {
            return (
              <div className="card news_card" key={index}>
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={item.urlToImage} alt={item.description} />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="title is-4">{item.author}</p>
                    </div>
                  </div>
                  <div className="content">
                    <p className="title is-3">{item.title}</p>
                    <p>{item.content}</p>
                    <div className="card_content_info">
                      <a href={item.url}>{item.source.name}</a>
                      <time dateTime={item.publishedAt}>
                        {item.publishedAt}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    news: state.news,
    loader: state.loader
  };
};
const mapDispatchToProps = {
  setNewsAsync
};
export default connect(mapStateToProps, mapDispatchToProps)(NewsPage);
