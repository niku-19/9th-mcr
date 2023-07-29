import { Route, Routes } from "react-router";
import LandingPage from "./Pages/LandingPage/LandingPage";
import MainContent from "./Components/MainContent/MainContent";
import ExploreVideo from "./Components/ExploreVideo/ExploreVideo";
import VideoListing from "./Components/VideoListing/VideoListing";
import VideoPlayer from "./Components/videoPlayer/VideoPlayer";
import WatchLater from "./Components/WatchLater/WatchLater.jsx";
import PlayList from "./Components/PlayList/PlayList";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage>
              <MainContent />
            </LandingPage>
          }
        />
        <Route
          path="/explore"
          element={
            <LandingPage>
              <ExploreVideo />
            </LandingPage>
          }
        />

        <Route
          path="/watch-later"
          element={
            <LandingPage>
              <WatchLater />
            </LandingPage>
          }
        />
        <Route
          path="/paylist"
          element={
            <LandingPage>
              <PlayList />
            </LandingPage>
          }
        />

        <Route
          path="/videos/:category"
          element={
            <LandingPage>
              <VideoListing />
            </LandingPage>
          }
        />
        <Route
          path="/videos/:category/:id"
          element={
            <LandingPage>
              <VideoPlayer />
            </LandingPage>
          }
        />
      </Routes>
    </>
  );
}

export default App;
