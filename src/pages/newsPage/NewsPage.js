import React, { useState, useEffect } from "react";
import "./stylesNewsPage.css";

const NewsPage = (props) => {
  const [news, setNews] = useState([]);
  // useEffect(() => {
  //   let url =
  //     "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-12&sortBy=publishedAt&apiKey=02441394710b493db283220dc59dd6c6";
  //   let req = new Request(url);
  //   fetch(req)
  //     .then(function(response) {
  //       return response.json();
  //     })
  //     .then((resp) => {
  //       if (resp.status === "ok") {
  //         setNews(resp.articles);
  //       }
  //     });
  // }, []);
  useEffect(() => {
    setNews([
      {
        source: {
          id: null,
          name: "Bitcoinist.com"
        },
        author: "Anatol Antonovici",
        title: "Here’s How Bitcoin’s Market Cap Would Look Like in 3D",
        description:
          "Bitcoin is experiencing one of the most challenging periods in its twelve-year history, but let’s leave the panic aside and imagine what the largest crypto would look like if it were physical. How Much Space Would Bitcoin Get? Most regulators and government o…",
        url: "https://bitcoinist.com/bitcoin-market-cap-look-like-in-3d/",
        urlToImage:
          "https://bitcoinist.com/wp-content/uploads/2020/03/btc1b-1-e1584190189703.jpg",
        publishedAt: "2020-03-14T13:00:48Z",
        content:
          "Bitcoin is experiencing one of the most challenging periods in its twelve-year history, but lets leave the panic aside and imagine what the largest crypto would look like if it were physical.\r\nHow Much Space Would Bitcoin Get?\r\nMost regulators and government … [+2574 chars]"
      },
      {
        source: {
          id: null,
          name: "Coindesk.com"
        },
        author: "Leigh Cuen",
        title: "Udi Wetheimer on Cyperpunk Myths and Bitcoin in Real Life",
        description:
          "CoinDesk reporter Leigh Cuen is joined by VR meetup organizer Udi Wertheimer to talk about how bitcoin (BTC) fits into the broader cypherpunk movement.",
        url:
          "https://www.coindesk.com/cypherpunk-myths-and-bitcoin-in-real-life",
        urlToImage:
          "https://www.coindesk.com/wp-content/uploads/2020/03/LEIGH-UDI-SEMIFINAL-CUT-RELEASE-1200x628.jpg",
        publishedAt: "2020-03-14T13:00:00Z",
        content:
          "CoinDesk reporter Leigh Cuen is joined by VR meetup organizer Udi Wertheimer to talk about how bitcoin (BTC) fits into the broader cypherpunk movement.\r\nFor daily insights and unique perspectives listen or subscribe to the CoinDesk Podcast Network with Apple … [+2709 chars]"
      },
      {
        source: {
          id: null,
          name: "Nationalcybersecurity.com"
        },
        author: null,
        title:
          "#cyberfraud | #cybercriminals | Top 10 cybercrimes and scams you need to be aware of",
        description:
          "And because cybercrime isn’t “real” in the physical sense, it’s taken years for most people to grasp the full scope of the damage it inflicts. Last year, the FBI’s Internet Crime Complaint Center received 467,361 reports, about 1,300 every single day. Individ…",
        url:
          "https://nationalcybersecurity.com/cyberfraud-cybercriminals-top-10-cybercrimes-and-scams-you-need-to-be-aware-of/",
        urlToImage:
          "https://i0.wp.com/nationalcybersecurity.com/wp-content/uploads/dreamstime_m_120960778-1.jpg?fit=1200%2C675&ssl=1",
        publishedAt: "2020-03-14T12:18:00Z",
        content:
          "Even though it doesnt physically hurt when youre hit by cybercrime, that doesnt mean you wont feel the pain. Hackers and cybercriminals can easily ruin your bank account, take loans out in your name or destroy your reputation.\r\nAnd because cybercrime isnt rea… [+12971 chars]"
      }
    ]);
  }, []);
  return (
    <div className="container is-widescreen hero is-fullheight news_wrapper">
      {news.map((item, index) => {
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
                  <time dateTime={item.publishedAt}>{item.publishedAt}</time>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NewsPage;
