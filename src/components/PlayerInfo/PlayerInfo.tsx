import React, { useEffect, useState, useMemo, useRef } from 'react';
import {useParams, useNavigate} from "react-router-dom";
import cl from '../../styles/PlayerInfo.module.sass'
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import PfLoader from '../../userinterface/Loader/pfLoader';
import { rankInterpretate, IRankInterpretate } from '../../lib/rankInterpretate';
import { getWinrateStats } from '../../lib/totalWinrateFractions';
import PfButton from '../../userinterface/button/pfButton';
import { getChampionAvatar } from '../../lib/getChampionAvatar'




const PlayerInfo: React.FC = () => {

    const {statusDesc, status, losses, wins, level, isLoading, platform,
        avatarURL, rankedStats, championRanks, championRanksBatch,
        matchHistory, currentPickedMatchId, isPlayerNameNotFound} = useTypeSelector(state => state.playerInfoReducer)
    const {sessionID} = useTypeSelector(state => state.devReducer)
    const {acGetPlayer, acGetPlayerChampionRanks, acGetPlayerStatus, acGetMatchHistory, playerInfoUnmountPlayerNotFound} = useActions()
    const {iconPath, rankName}: IRankInterpretate = rankInterpretate(rankedStats.Tier)
    const [hintVisibility, setHintVisibility] = useState(false)
    const [modal, setModal] = useState(false)
    const [selectedChampionBest, setSelectedChampionBest] = useState('')


    const params = useParams()
    const navigate = useNavigate()

    const elementChampionRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => { // making block with description about best champion change right position to left if block goes out of screen
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    (entry.target as HTMLDivElement).style.removeProperty("left");
                    (entry.target as HTMLDivElement).style.right = "0px"
                }
            },
            {
                threshold: 0.05,
            }
        )
        if(elementChampionRef.current){
            observer.observe(elementChampionRef.current)
        }
        return () => {
            if(elementChampionRef.current)observer.unobserve(elementChampionRef.current)
        }
    }, [elementChampionRef, selectedChampionBest])


    useEffect(() => {
        acGetPlayer(params.playerName, sessionID)
        acGetPlayerChampionRanks(params.playerName, sessionID)
        acGetPlayerStatus(params.playerName, sessionID)
        acGetMatchHistory(params.playerName, sessionID)

        return () => {
            playerInfoUnmountPlayerNotFound()
        }
    }, [params.playerName])




    const onMatchDetailsClick = async(matchId: number) => {
        await navigate(`/match/${matchId}`)
    }

    const onPlayerSearchBack = async() => {
        await navigate(`/players`)
    }

    const {winrate, lossrate, currentSeasonWinrate, currentSeasonLossrate} = getWinrateStats(wins, losses, rankedStats.Wins, rankedStats.Losses)

    const toggleStatusHint = () => {
        setHintVisibility(!hintVisibility)
    }

    const toggleBestChampionView = (champion: string) => {
        setSelectedChampionBest(champion)
    }


    if(isLoading){
        return <PfLoader />
    }


    if(isPlayerNameNotFound){
        return (
            <div className={cl.notFoundCase}>
                <div className={cl.notFoundCase__wrapper}>
                    <div className={cl.notFoundCase__image}><img src={require("../../image/atlas.png")} alt=""/></div>
                    <div className={cl.notFoundCase__title}>VCEQ! Player was not found, should Atlas throw you back in time?</div>
                    <div className={cl.notFoundCase__button}><button onClick={onPlayerSearchBack}>OK</button></div>
                </div>
            </div>
        )
    }






    return (
                <div>

                    <div className={cl.profile__playerInfo}>
                            <div className={cl.profile__playerInfo_shortView}>
                                <div className={cl.profile__playerInfo_mainInfoWrapper}>
                                    <div className={cl.profile__playerInfo_rankIcon}><img src={iconPath}></img></div>
                                    <div className = {cl.profile__playerInfo_shortViewWrapper}>
                                        <div className={cl.playerInfo__shortViewWrapper_review}>
                                            <div className={cl.playerInfo__shortView_Name}>{params.playerName}</div>
                                            <div className={cl.playerInfo__shortView_Rank}>{rankName}</div>
                                            <div className={cl.playerInfo__shortView_Level}>Level {level}</div>
                                        </div>
                                        <span className={cl.playerInfo__shortView_platform}>{platform}</span>
                                        <div className={`${cl.playerInfo__shortView_status} ${(status == 0 || status == 5) ? '' : cl.online}`} onMouseOver={toggleStatusHint} onMouseOut={toggleStatusHint}></div>
                                        <div className={cl.playerInfo__shortView_hint} style={hintVisibility == true ? {visibility: "visible"} : {visibility: "hidden"}}>{statusDesc} right now!</div>
                                    </div>
                                </div>
                                <div className={cl.profile__playerInfo_avatarWrapper}><img src={avatarURL}/></div>
                            </div>

                    </div>


                    <div className={cl.profile__playerInfo_totalWinrate}>
                        <div className={cl.profile__playerInfo_winrateLine}>
                            <div className={cl.profile__playerInfo_winrateLine_win}>
                                <span>{winrate}% / {wins} games</span>
                            </div>
                            <div className={cl.profile__playerInfo_winrateLine_loss}>
                                <span>{lossrate}% / {losses} games</span>
                            </div>
                        </div>
                        <div className={cl.profile__playerInfo_totalWinrate_text}>Total Winrate</div>
                    </div>

                    <div className={cl.profile__playerInfo_totalWinrate}>
                        <div className={cl.profile__playerInfo_winrateLineSeason}>
                            <div className={cl.profile__playerInfo_winrateLineSeason_win}>
                                <span>{currentSeasonWinrate}% / {rankedStats.Wins} games</span>
                            </div>
                            <div className={cl.profile__playerInfo_winrateLineSeason_loss}>
                                <span>{currentSeasonLossrate}% / {rankedStats.Losses} games</span>
                            </div>
                        </div>
                        <div className={cl.profile__playerInfo_totalWinrate_text}>Current Season Winrate</div>
                    </div>

                    <div className={cl.profile__champInfo_mainTitle}>Best Champions</div>
                            <div className={cl.profile__champInfo}>
                                {championRanksBatch.map(champion =>
                                  <div className={cl.profile__champInfo_wrapper} key={champion.champion}>
                                      <div className={cl.profile__champInfo_image} onMouseOver={() => toggleBestChampionView(champion.champion)} onMouseOut={() => toggleBestChampionView('')}>
                                          <img src={getChampionAvatar(champion.champion)} alt=""/>
                                      </div>
                                      <div className={cl.profile__champInfo_info}  ref={elementChampionRef} style={ selectedChampionBest == champion.champion ? {display: "grid"} : {display: "none"}}>
                                          <div className={cl.profile__champInfo_title}>
                                              <div>{champion.champion}</div>
                                              <div>{champion.Rank}</div>
                                          </div>
                                          <div className={cl.profile__champInfo_totalKDA}>
                                              <div>Total KDA:</div>
                                              <div>{((champion.Kills + champion.Assists) / champion.Deaths).toFixed(1)}</div>
                                          </div>
                                          <div className={cl.profile__champInfo_detailedKDA}>
                                              <div className={cl.profile__champInfo_detailedKDAitem}>
                                                  <div >Kills</div>
                                                  <div>{champion.Kills}</div>
                                              </div>
                                              <div className={cl.profile__champInfo_detailedKDAitem}>
                                                  <div>Deaths</div>
                                                  <div>{champion.Deaths}</div>
                                              </div>
                                              <div className={cl.profile__champInfo_detailedKDAitem}>
                                                  <div>Assists</div>
                                                  <div>{champion.Assists}</div>
                                              </div>
                                              <div className={cl.profile__champInfo_detailedKDAitem}>
                                                  <div>Time Played:</div>
                                                  <div>{Math.floor(champion.Minutes / 60)}:{(champion.Minutes % 60) < 10 ? '0'+(champion.Minutes % 60) : (champion.Minutes % 60)}</div>
                                              </div>
                                          </div>
                                          <div className={cl.profile__champInfo_winrate}>
                                              <div>Total Winrate</div>
                                              <div>{Math.ceil((champion.Wins / (champion.Wins + champion.Losses)) * 100)} %</div>
                                          </div>
                                          <div className={cl.profile__champInfo_detailedWinrate}>
                                              <div className={cl.profile__champInfo_detailedWinrateItem}>
                                                  <div>Wins </div>
                                                  <div>{champion.Wins}</div>
                                              </div>
                                              <div className={cl.profile__champInfo_detailedWinrateItem}>
                                                  <div>Losses </div>
                                                  <div>{champion.Losses}</div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                )}
                            </div>


                    <div className={cl.profile__matchHistory}>
                            {matchHistory.map(match =>
                                <div className={cl.profile__matchHistory_item} onClick={() => onMatchDetailsClick(match.Match)}>
                                    <div className={cl.matchHistory__item_icon}><img src={getChampionAvatar(match.Champion)} alt={match.Champion}/></div>
                                    <div className={cl.matchHistory__item_result}>
                                        <div style={match.Win_Status == "Win" ? {color: "#089E9C"} : {color: "#FF6C38"}}>{ match.Queue == "Siege" || match.Queue == "Ranked" ? `${match.Team1Score} - ${match.Team2Score}`: ''}</div>
                                        <div style={match.Win_Status == "Win" ? {color: "#089E9C"} : {color: "#FF6C38"}}>{match.Win_Status}</div>
                                    </div>
                                    <div className={cl.matchHistory__item_time}>{Math.floor(match.Time_In_Match_Seconds / 60)}:{(match.Time_In_Match_Seconds % 60) < 10 ? '0'+(match.Time_In_Match_Seconds % 60) : (match.Time_In_Match_Seconds % 60)}</div>
                                    <div className={cl.matchHistory__item_queue}>{match.Queue}</div>
                                    <div className={cl.matchHistory__item_kda}>{match.Kills} / {match.Deaths} / {match.Assists}</div>
                                </div>
                            )}
                    </div>

                </div>

    );
};

export default PlayerInfo;