export const SET_NEWS = "setNews";

export const setNewsAsync = () => {
  return (dispatch) => {
    let url =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-14&sortBy=publishedAt&apiKey=5441e9293d834b1387e1209f8c5f6f8d";
    let req = new Request(url);
    return fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then((resp) => {
        console.log("resp", resp);
        if (resp.status === "ok") {
          dispatch({
            type: SET_NEWS,
            payload: resp.articles
          });
        }
      });
  };
};
