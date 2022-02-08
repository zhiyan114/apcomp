import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Error404 from './pages/404';
import Main from './pages/Main';

// Import all slides
import LyricSlide from './pages/Slides/LyricSong';
import MusicInfo from './pages/Slides/SongInfo';
import ArtistMotivation from './pages/Slides/ArtistMotivation';
import Credit from './pages/Slides/Credit';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/slides/lyrics" element={<LyricSlide/>} />
          <Route path="/slides/info" element={<MusicInfo/>} />
          <Route path="/slides/motivation" element={<ArtistMotivation/>} />
          <Route path="/slides/credits" element={<Credit/>} />
          <Route path="*" element={<Error404/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
