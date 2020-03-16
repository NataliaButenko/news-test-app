export const LOGIN = "login";

export const login = () => {
  return (dispatch) => {
    dispatch({
      type: LOGIN,
      payload: true
    });
  };
};
