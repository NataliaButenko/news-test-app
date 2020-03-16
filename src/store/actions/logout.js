export const LOGOUT = "logout";

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT,
      payload: false
    });
  };
};
