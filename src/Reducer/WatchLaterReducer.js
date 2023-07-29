import videos from "../Data/VideoData";

const INITIAL_STATE = {
  videoData: videos,
  watchLater: [],
};

const WatchLaterReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_TO_WATCH_LATER": {
      const addedVideo = state.videoData.map((item) =>
        item._id === payload._id
          ? { ...item, isAlreadyWatchedLater: true }
          : { ...item }
      );

      localStorage.setItem("watchLater", JSON.stringify(state.watchLater));
      return {
        ...state,
        videoData: addedVideo,
        watchLater: [...state.watchLater, payload],
      };
    }

    case "REMOVE_FROM_WATCH_LATER": {
      const addedVideo = state.videoData.map((item) =>
        item._id === payload._id
          ? { ...item, isAlreadyWatchedLater: false }
          : { ...item }
      );

      localStorage.setItem("watchLater", JSON.stringify(state.watchLater));

      return {
        ...state,
        videoData: addedVideo,
        watchLater: state.watchLater.filter((item) => item._id !== payload._id),
      };
    }

    default:
      return state;
  }
};

export { INITIAL_STATE, WatchLaterReducer };
