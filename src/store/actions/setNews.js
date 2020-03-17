import { LOADING_TRUE, LOADING_FALSE } from "./toggleLoader";

export const SET_NEWS = "setNews";

export const setNewsAsync = () => {
  return (dispatch) => {
    dispatch({
      type: LOADING_TRUE,
      payload: true
    });
    let url =
      "http://newsapi.org/v2/everything?q=bitcoin&from=2020-02-17&sortBy=publishedAt&apiKey=5b3709c9f4bc424b9747bae0645264d4";
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
