import React, { useEffect, useState } from 'react';
import cl from '../../styles/Ranking.module.sass'
import { useActions } from '../../hooks/useActions';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import PfLoader from '../../userinterface/Loader/pfLoader';

const Ranking: React.FC = () => {
    const {rankingFetchBestPlayers} = useActions()
    const {sessionID} = useTypeSelector(state => state.devReducer)
    const {isLoading, bestPlayers} = useTypeSelector(state => state.rankingReducer)
    const [unknownPlayerShowed, setUnknownPlayerShowed] = useState(0)

    useEffect(() => {
        rankingFetchBestPlayers(sessionID)
    }, [])

    const toggleUnknownPlayerView = (itemId: number) => {
        if(unknownPlayerShowed == itemId){
            return setUnknownPlayerShowed(0)
        }
        setUnknownPlayerShowed(itemId)
    }

    if(isLoading){
        return <PfLoader />
    }


    return (
        <div>
            <div className={cl.ranking__exampleholder}>
                <div>Number</div>
                <div>Name</div>
                <div>Points</div>
                <div>Wins</div>
                <div>Losses</div>
            </div>
            <div className={cl.ranking__itemWrapper}>
                {bestPlayers.map((player, index) =>
                    <div className={cl.ranking__item} key={player.player_id + index}>
                        <div className={cl.ranking__item_number}>{index + 1}</div>
                        <div className={cl.ranking__item_name}>
                            {player.Name ? player.Name : <div className={cl.unknownPlayer} onClick={e => e.stopPropagation()} onMouseOver={() => toggleUnknownPlayerView(+player.Wins + player.Losses + player.Points)} onMouseOut={() => toggleUnknownPlayerView(+player.Wins + player.Losses + player.Points)}>
                                unknown player ?
                                <div className={cl.unknownPlayerHint} style={unknownPlayerShowed == +player.Wins + player.Losses + player.Points ? {display: "block"} : {display: "none"}}>
                                    Seems like Paladins API doesnt return nickname of this player, cause of player desire. We cant do anything to provide nickname of player for you.
                                </div>
                            </div>}
                        </div>
                        <div className={cl.ranking__item_points}>{player.Points} TP</div>
                        <div className={cl.ranking__item_wins}>{player.Wins}</div>
                        <div className={cl.ranking__item_losses}>{player.Losses}</div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Ranking;