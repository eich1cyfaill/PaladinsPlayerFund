import React, {useEffect, useState, useRef} from 'react';
import cl from '../../styles/MatchDetail.module.sass'
import {useParams} from 'react-router-dom';
import {useTypeSelector} from '../../hooks/useTypeSelector';
import PfLoader from '../../userinterface/Loader/pfLoader';
import {useActions} from '../../hooks/useActions';
import { rankInterpretate } from '../../lib/rankInterpretate';
import TeammateItem from './TeammateItem/TeammateItem';

const MatchDetail: React.FC = () => {
    const [isOpened, setIsOpened] = useState(false)
    const [selectedItems, setSelectedItems]: any = useState([])
    const {sessionID} = useTypeSelector(state => state.devReducer)
    const {isLoading, firstTeam, secondTeam} = useTypeSelector(state => state.matchDetailReducer)
    const {acFetchMatchDetails} = useActions()
    const params = useParams()

    const mateItemRef: any = useRef(false)


    useEffect(() => {
        acFetchMatchDetails(sessionID, params.matchId)
    }, [params.matchId])

    const toggleDetailedView = (Damage_Taken: string): void => {
        if(selectedItems.includes(Damage_Taken)){
            return setSelectedItems((prevItems: []) => prevItems.filter((i: string) => i !== Damage_Taken))
        }
        setSelectedItems((prevValue: []) => [...prevValue, Damage_Taken])
    }


    if (isLoading) {
        return <PfLoader/>
    }

    return (
        <>
            <div className={cl.matchDetail__matchShortInfo}
                 style={{backgroundImage: `url(https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/maps/siege/frozen-guard.jpg)`}}>
                <div className={cl.matchDetail__matchShortInfo_wrapper}>
                    <div className={cl.matchDetail__matchShortInfo_upperString}>
                        <span>{firstTeam[0].name.toUpperCase()}</span>
                        <span>{params.matchId}</span>
                    </div>
                    <div className={cl.matchDetail__matchShortInfo_score}>
                        {firstTeam[0].Team1Score == 4 ? firstTeam[0].Team1Score : firstTeam[0].Team2Score} - {firstTeam[0].Team1Score == 4 ? firstTeam[0].Team2Score : firstTeam[0].Team1Score}
                    </div>
                    <div className={cl.matchDetail__matchShortInfo_bottomString}>
                        <div>{firstTeam[0].hasReplay == "y" ? `Has Replay` : ''}</div>
                        <span>{firstTeam[0].Map_Game}</span>
                    </div>
                </div>
            </div>

            <div className={cl.teamResultsWrapper}>
                <div className={cl.firstTeamWrapper}>
                    <div className={cl.firstTeamWrapper__titleResult}
                         style={firstTeam[0].Win_Status == "Winner" ? {color: "#089E9C"} : {color: "#FF6C38"}}>
                        {firstTeam[0].Win_Status.toUpperCase()}
                    </div>
                    <div className={cl.firstTeamWrapper__itemWrapper}>
                        {firstTeam.map(mate =>
                            <TeammateItem {...mate} selectedItems={selectedItems} toggleDetailedView={toggleDetailedView} key={mate.Damage_Taken+mate.Gold_Earned}/>
                        )}
                    </div>
                </div>

                <div className={cl.secondTeamWrapper}>
                    <div className={cl.secondTeamWrapper__titleResult}
                         style={secondTeam[0].Win_Status == "Winner" ? {color: "#089E9C"} : {color: "#FF6C38"}}>
                        {secondTeam[0].Win_Status.toUpperCase()}
                    </div>
                    <div className={cl.secondTeamWrapper__itemWrapper}>
                        {secondTeam.map(mate =>
                            <TeammateItem {...mate} selectedItems={selectedItems} toggleDetailedView={toggleDetailedView} key={mate.Damage_Taken+mate.Gold_Earned}/>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MatchDetail;