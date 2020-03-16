import { LOADING_TRUE, LOADING_FALSE } from "./toggleLoader";

export const SET_NEWS = "setNews";

export const setNewsAsync = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    let url =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-16&sortBy=publishedAt&apiKey=b55953e9fe9f4326817dde384d22c912";
    let req = new Request(url);
    return fetch(req)
      .then(function(response) {
        return response.json();
      })
      .then((resp) => {
        if (resp.status === "ok") {
          dispatch({
            type: SET_NEWS,
            payload: resp.articles
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch({
          type: LOADING_FALSE,
          payload: false
        });
      });
  };
};
