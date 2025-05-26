import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/About.js'
import Events from './pages/Events.js'
import Shows from './pages/Shows.js'
import Sponsorship from './pages/Sponsorship.js'
import Team from './pages/Teams.js'
import Home from './pages/Home.js'
import StandFor from './pages/StandFor.js'

import ShowsFFC from './pages/ShowsFFC.js'
import ShowsEnchanted from './pages/ShowsEnchanted.js'
import ShowsFCMAS from './pages/ShowsFCMAS.js'
import ShowsPandoras from './pages/ShowsPandoras.js'
import ShowsTTD from './pages/ShowsTTD.js'
import ShowsSYTYGS from './pages/ShowsSYTYGS.js'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/about-us"
            element={<AboutUs />}
          />
          <Route
            path="/past-shows/ffc"
            element={<ShowsFFC />}
          />
          <Route
            path="/past-shows/enchanted"
            element={<ShowsEnchanted />}
          />
          <Route
            path="/past-shows/pandoras"
            element={<ShowsPandoras />}
          />
          <Route
            path="/past-shows/fcmas"
            element={<ShowsFCMAS />}
          />
          <Route
            path="/past-shows/sytygs"
            element={<ShowsSYTYGS />}
          />
          <Route
            path="/past-shows/ttd"
            element={<ShowsTTD />}
          />

          <Route
            path="/events"
            element={<Events />}
          />
          <Route
            path="/stand-for"
            element={<StandFor />}
          />
          <Route
            path="/sponsorship"
            element={<Sponsorship />}
          />
          <Route
            path="/teams"
            element={<Team />}
          />
          <Route
            path="/shows"
            element={<Shows />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

