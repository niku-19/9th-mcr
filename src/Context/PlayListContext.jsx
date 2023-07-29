import { INITIAL_STATE, playListReducer } from "../Reducer/PlaylistReducer";

const { createContext, useContext, useReducer } = require("react");

const playListContext = createContext();

const PlayListContextProvider = ({ children }) => {
  const [playListData, dispatch] = useReducer(playListReducer, INITIAL_STATE);
  console.log(
    "🚀 ~ file: PlayListContext.jsx:9 ~ PlayListContextProvider ~ playListData:",
    playListData
  );

  return (
    <playListContext.Provider value={{ playListData, dispatch }}>
      {children}
    </playListContext.Provider>
  );
};

export const usePlayListContext = () => useContext(playListContext);

export default PlayListContextProvider;
