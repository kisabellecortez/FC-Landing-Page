import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/About.js'
import Events from './pages/Events.js'
import Shows from './pages/Shows.js'
import Sponsorship from './pages/Sponsorship.js'
import Team from './pages/Teams.js'
import TeamsBOD from './pages/TeamsBOD.js'
import TeamsArtistic from './pages/TeamsArtistic.js'
import TeamsEvents from './pages/TeamsEvents.js'
import TeamsStage from './pages/TeamsStage.js'
import TeamsFinance from './pages/TeamsFinance.js'
import TeamsModel from './pages/TeamsModel.js'
import TeamsPR from './pages/TeamsPR.js'
import Home from './pages/Home.js'
import StandFor from './pages/StandFor.js'

import ShowsFFC from './pages/ShowsFFC.js'
import ShowsEnchanted from './pages/ShowsEnchanted.js'
import ShowsFCMAS from './pages/ShowsFCMAS.js'
import ShowsPandoras from './pages/ShowsPandoras.js'
import ShowsTTD from './pages/ShowsTTD.js'
import ShowsSYTYGS from './pages/ShowsSYTYGS.js'

import AcademyAwards from './pages/Shows/AcademyAwards.js'
import Arcana from './pages/Shows/Arcana.js'
import CoverToCover from './pages/Shows/CoverToCover.js'
import DirectorsCut from './pages/Shows/DirectorsCut.js'
import SpunFromGold from './pages/Shows/SpunFromGold.js'
import Soul from './pages/Shows/Soul.js'
import Tuesday from './pages/Shows/Tuesday.js'

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
            path="/past-shows/academy-awards"
            element={<AcademyAwards/>}
          />
          <Route
            path="/past-shows/arcana"
            element={<Arcana/>}
          />
          <Route
            path="/past-shows/cover-to-cover"
            element={<CoverToCover/>}
          />
          <Route
            path="/past-shows/directors-cut"
            element={<DirectorsCut/>}
          />
          <Route
            path="/past-shows/soul"
            element={<Soul/>}
          />
          <Route
            path="/past-shows/spun-from-gold"
            element={<SpunFromGold/>}
          />
          <Route
            path="/past-shows/tuesday"
            element={<Tuesday/>}
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
            path="/teams/bod"
            element={<TeamsBOD />}
          />
          <Route
            path="/teams/artistic"
            element={<TeamsArtistic />}
          />
          <Route
            path="/teams/events"
            element={<TeamsEvents />}
          />
          <Route
            path="/teams/stage"
            element={<TeamsStage />}
          />
          <Route
            path="/teams/finance"
            element={<TeamsFinance />}
          />
          <Route
            path="/teams/model"
            element={<TeamsModel />}
          />
          <Route
            path="/teams/pr"
            element={<TeamsPR />}
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

