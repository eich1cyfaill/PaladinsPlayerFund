import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.sass';
import { Routes, Route } from 'react-router-dom';
import PlayerSearch from './components/PlayerSearch/PlayerSearch';
import Header from './components/Header';
import Footer from './components/Footer'
import PlayerInfo from './components/PlayerInfo/PlayerInfo';
import ChampionList from './components/Champions/ChampionList';
import Ranking from './components/Ranking/Ranking';
import Settings from './components/Settings/Settings';
import DevPage from './components/dev/devPage';
import MatchDetail from './components/MatchDetail/MatchDetail';
import { useActions } from './hooks/useActions';

const App: React.FC = () => {

    const {createSession} = useActions()

    useEffect(() => {
        createSession()
    }, [])

  return (
      <div>
          <Header />
          <div className="App">
              <div className="Routes_wrapper">
                  <Routes>
                      <Route path="players" element={<PlayerSearch />} />
                      <Route path="profile/:playerName" element={<PlayerInfo />}/>
                      <Route path="champions" element={<ChampionList />} />
                      <Route path="ranking" element={<Ranking />} />
                      <Route path="settings" element={<Settings />} />
                      <Route path="dev" element={<DevPage />} />
                      <Route path="match/:matchId" element={<MatchDetail />} />
                      <Route path="*" element={<PlayerSearch />} />
                  </Routes>
              </div>
          </div>
          <Footer />
      </div>

  );
}

export default App;
