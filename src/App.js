import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUs from './pages/About.js'
import Events from './pages/Events.js'
import Shows from './pages/Shows.js'
import Sponsorship from './pages/Sponsorships.js'

// Teams pages
import TeamSponsorship from './pages/Teams/Sponsorship.js'
import TeamsBOD from './pages/Teams/BoardOfDirectors.js'
import TeamsArtistic from './pages/Teams/Artistic.js'
import TeamsEvents from './pages/Teams/Events.js'
import TeamsStage from './pages/Teams/Stage.js'
import TeamsFinance from './pages/Teams/Finance.js'
import TeamsModel from './pages/Teams/Model.js'
import TeamsPR from './pages/Teams/PublicRelations.js'
import TeamsMarketing from './pages/Teams/Marketing.js'

import Home from './pages/Home.js'
import StandFor from './pages/StandFor.js'
import ContactUs from './pages/ContactUs.js'

// Shows pages
import ShowsFFC from './pages/Shows/FFC.js'
import ShowsEnchanted from './pages/Shows/Enchanted.js'
import ShowsFCMAS from './pages/Shows/FCMAS.js'
import ShowsPandoras from './pages/Shows/Pandoras.js'
import ShowsTTD from './pages/Shows/ThroughtheDecades.js'
import ShowsSYTYGS from './pages/Shows/SYTYGS.js'
import ShowsAcademyAwards from './pages/Shows/AcademyAwards.js'
import ShowsArcana from './pages/Shows/Arcana.js'
import ShowsCoverToCover from './pages/Shows/CoverToCover.js'
import ShowsDirectorsCut from './pages/Shows/DirectorsCut.js'
import ShowsSpunFromGold from './pages/Shows/SpunFromGold.js'
import ShowsSoul from './pages/Shows/Soul.js'
import ShowsTuesday from './pages/Shows/Tuesday.js'

import Magazine from './pages/magazine.js'

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
            element={<ShowsAcademyAwards/>}
          />
          <Route
            path="/past-shows/arcana"
            element={<ShowsArcana/>}
          />
          <Route
            path="/past-shows/cover-to-cover"
            element={<ShowsCoverToCover/>}
          />
          <Route
            path="/past-shows/directors-cut"
            element={<ShowsDirectorsCut/>}
          />
          <Route
            path="/past-shows/soul"
            element={<ShowsSoul/>}
          />
          <Route
            path="/past-shows/spun-from-gold"
            element={<ShowsSpunFromGold/>}
          />
          <Route
            path="/past-shows/tuesday"
            element={<ShowsTuesday/>}
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
            path="/contact-us"
            element={<ContactUs />}
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
            path="/teams/marketing"
            element={<TeamsMarketing />}
          />
          <Route
            path="/teams/finance"
            element={<TeamsFinance />}
          />
          <Route
            path="/teams/sponsorship"
            element={<TeamSponsorship />}
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

          <Route
            path="/magazine"
            element={<Magazine />}
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

