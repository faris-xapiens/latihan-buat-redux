import {
  FETCHING_ARTICLE_REQUEST,
  FETCHING_ARTICLE_SUCCESS,
  FETCHING_ARTICLE_FAILURE,
} from "./actionTypes";
import axios from "axios";

export const fetchingArticle = () => {
  return (dispatch) => {
    dispatch(fetchingArticleRequest());
    axios({
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts/",
    })
      .then(({ data }) => {
        const articles = data;
        dispatch(fetchingArticleSuccess(articles));
      })
      .catch(({ message }) => {
        dispatch(fetchingArticleFailure(message));
      });
  };
};

export const fetchingArticleRequest = () => {
  return {
    type: FETCHING_ARTICLE_REQUEST,
  };
};

export const fetchingArticleSuccess = (articles) => {
  return {
    type: FETCHING_ARTICLE_SUCCESS,
    payload: articles,
  };
};

export const fetchingArticleFailure = (error) => {
  return {
    type: FETCHING_ARTICLE_FAILURE,
    payload: error,
  };
};
