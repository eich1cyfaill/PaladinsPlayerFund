import React from 'react';
import PfButton from '../../userinterface/button/pfButton'
import { useActions } from '../../hooks/useActions';
import { DevGetPlayer } from '../../store/actionCreators/devAC';
import { useTypeSelector } from '../../hooks/useTypeSelector';


const DevPage = () => {

    const {sessionID, signature} = useTypeSelector(state => state.devReducer)

    const {createSession, DevGetTopMatches, DevGetLeagueLeaderboard, DevGetLeagueSeasons, DevGetMotD, DevGetPlayer, DevGetDataUsage, DevGetChampionRanks, DevGetMatchHistory, DevGetMatchPlayerDetails, DevGetMatchDetails, DevGetMatchDetailsBatch} = useActions()


    return (
        <div>
            <PfButton onClick={() => createSession()}>Create Session Paladins API</PfButton>
            <PfButton onClick={() => DevGetPlayer(sessionID)}>GetPlayer</PfButton>
            <PfButton onClick={() => DevGetDataUsage(sessionID)}>GetDataUsage</PfButton>
            <PfButton onClick={() => DevGetChampionRanks(sessionID)}>GetChampionsRanks</PfButton>
            <PfButton onClick={() => DevGetMatchHistory(sessionID)}>GetMatchHistory</PfButton>
            <PfButton onClick={() => DevGetMatchDetails(sessionID)}>GetMatchDetails</PfButton>
            <PfButton onClick={() => DevGetMatchDetailsBatch(sessionID)}>GetMatchDetailsBatch</PfButton>
            <PfButton onClick={() => DevGetMatchPlayerDetails(sessionID)}>GetMatchPlayerDetails</PfButton>
            <PfButton onClick={() => DevGetMotD(sessionID)}>GetTopMotD</PfButton>
            <PfButton onClick={() => DevGetLeagueSeasons(sessionID)}>GetDevLeagueSeasons</PfButton>
            <PfButton onClick={() => DevGetLeagueLeaderboard(sessionID)}>DevGetLeagueLeaderboard</PfButton>
            <PfButton onClick={() => DevGetTopMatches(sessionID)}>DevGetTopMatches</PfButton>
        </div>
    );
};

export default DevPage;