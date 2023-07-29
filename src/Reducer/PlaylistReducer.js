import playList from "../Data/PlayListData";

const INITIAL_STATE = {
  playlist: playList,
  playlistLoading: false,
  playlistError: null,
  notes: [],
};

const playListReducer = (state, { type, payload }) => {
  console.log(
    "🚀 ~ file: PlaylistReducer.js:10 ~ playListReducer ~ payload:",
    payload
  );
  switch (type) {
    case "ADD_PLAYLIST": {
      return {
        ...state,
        playlist: [...state.playlist, payload],
      };
    }

    case "REMOVE_PLAYLIST": {
      return {
        ...state,
        playlist: state.playlist.filter((item) => item.id !== payload),
      };
    }

    case "ADD_video": {
      return {
        ...state,
        playlist: state.playlist.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              videos: [...item.videos, payload.video],
            };
          }
          return item;
        }),
      };
    }
    case "ADD_NOTES": {
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    }
    default:
      return state;
  }
};

export { playListReducer, INITIAL_STATE };
