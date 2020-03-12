import React, { useState, useEffect } from "react";

const NewsPage = (props) => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    let url =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-12&sortBy=publishedAt&apiKey=02441394710b493db283220dc59dd6c6";
    let req = new Request(url);
    fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then((resp) => {
        if (resp.status === "ok") {
          setNews(resp.articles);
        }
      });
  }, []);
  return (
    <div className="App">
      <h1>News Page</h1>
      <ul>
        {news.map((item, index) => {
          return <li key={index}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default NewsPage;
