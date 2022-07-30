import axios from "axios";
import {
  IS_ERR,
  IS_LOADING,
  SET_USER,
  SIGNIN_SUCCESS,
  SIGNUP_SUCCESS,
} from "./actionTypes";

export const isLoading = () => (dispatch) => {
  dispatch({
    type: IS_LOADING,
  });
};

export const signup = (payload) => (dispatch) => {
  dispatch(isLoading());
  axios
    .post("https://bug-destroyer.herokuapp.com/auth/signup", payload)
    .then((res) => {
      dispatch({
        type: SIGNUP_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: IS_ERR,
        payload: e.data,
      });
    });
};

export const checkUser = () => (dispatch) => {
  let token = JSON.parse(localStorage.getItem("token")) || "";
  console.log(token);
  if (token !== "") {
    dispatch({
      type: SET_USER,
      payload: token,
    });
  }
};

export const login = (payload) => (dispatch) => {
  dispatch(isLoading());
  axios
    .post("https://bug-destroyer.herokuapp.com/auth/login", payload)
    .then((res) => {
      console.log(res);
      if (res.data.type === "success") {
        localStorage.setItem("token", JSON.stringify(res.data.token));
      }
      dispatch({
        type: SIGNIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((e) => {
      dispatch({
        type: IS_ERR,
        payload: e.data,
      });
    });
};
