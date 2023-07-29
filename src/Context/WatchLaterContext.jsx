import { createContext, useContext, useReducer } from "react";
import { INITIAL_STATE, WatchLaterReducer } from "../Reducer/WatchLaterReducer";

const WatchLaterContext = createContext();

const WatchLaterProvider = ({ children }) => {
  const [watchLaterData, dispatch] = useReducer(
    WatchLaterReducer,
    INITIAL_STATE
  );

  return (
    <WatchLaterContext.Provider value={{ watchLaterData, dispatch }}>
      {children}
    </WatchLaterContext.Provider>
  );
};

export const useWatchLater = () => useContext(WatchLaterContext);

export default WatchLaterProvider;
