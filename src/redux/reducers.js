import {
    UPDATE_HIGHEST_SCORE,
    RESET_HIGHEST_SCORE,
    UPDATE_ACTIVE_SCORE,
    RESET_ACTIVE_SCORE,
  } from "./actions";
  
  const initialHighScore = {
    name: "",
    score: 0,
  };
  
  export const scoresReducer = (state = initialHighScore, action) => {
    switch (action.type) {
      case UPDATE_HIGHEST_SCORE:
        return { name: action.payload.name, score: action.payload.score };
      case RESET_HIGHEST_SCORE:
        return { name: "", score: 0 };
      default:
        return state;
    }
  };
  
  const initialActivePlayer = {
    name: "",
    score: 0,
  };
  
  export const activePlayerReducer = (state = initialActivePlayer, action) => {
    switch (action.type) {
      case UPDATE_ACTIVE_SCORE:
        return { name: action.payload.name, score: action.payload.score };
      case RESET_ACTIVE_SCORE:
        return { name: "", score: 0 };
      default:
        return state;
    }
  };
  