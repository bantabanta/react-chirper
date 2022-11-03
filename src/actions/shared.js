import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import { setAuthedUser } from "./authedUser";

export const RECEIVE_DATA = "RECEIVE_DATA";

// action creator

function receiveData(todos, goals) {
  return {
    type: RECEIVE_DATA,
  };
}

const AUTHED_ID = "tylermcginnis";

// asynchronous action creator

export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, tweets }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
