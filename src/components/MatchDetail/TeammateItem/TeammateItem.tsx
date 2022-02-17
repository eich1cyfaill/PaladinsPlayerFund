import React, { useState } from 'react';
import cl from '../../../styles/TeammateItem.module.sass'
import {rankInterpretate} from '../../../lib/rankInterpretate';
import { paladinsBuyableItemsLib } from '../../../lib/paladinsBuyableItemsLib';
import { getChampionAvatar } from '../../../lib/getChampionAvatar';

const TeammateItem = ({
                          selectedItems, Damage_Player, Damage_Mitigated, Healing, Healing_Player_Self, Damage_Taken, playerName, Account_Level,
                          Kills_Player, Deaths, Assists, Win_Status, League_Tier,
                          Reference_Name, toggleDetailedView, ActiveId1, ActiveId2, ActiveId3, ActiveId4,
                          ActiveLevel1, ActiveLevel2, ActiveLevel3, ActiveLevel4, Item_Active_1, Item_Active_2, Item_Active_3,
                          Item_Active_4, Item_Purch_1, Item_Purch_2, Item_Purch_3, Item_Purch_4, Item_Purch_5, Item_Purch_6,
                          Gold_Earned, ItemLevel1, ItemLevel2, ItemLevel3, ItemLevel4, ItemLevel5,
                      }: any) => {

    const [showedItem, setShowedItem] = useState('')
    const [unknownPlayerShowed, setUnknownPlayerShowed] = useState(false)
    const boughtItems = [{
        ActiveId: ActiveId1,
        ActiveLevel: ActiveLevel1,
        ItemActive: Item_Active_1
    }, {
        ActiveId: ActiveId2,
        ActiveLevel: ActiveLevel2,
        ItemActive: Item_Active_2
    }, {
        ActiveId: ActiveId3,
        ActiveLevel: ActiveLevel3,
        ItemActive: Item_Active_3
    }, {
        ActiveId: ActiveId4,
        ActiveLevel: ActiveLevel4,
        ItemActive: Item_Active_4
    }]

    const cardsItems = [{
        CardName: Item_Purch_1,
        CardLevel: ItemLevel1
    }, {
        CardName: Item_Purch_2,
        CardLevel: ItemLevel2
    }, {
        CardName: Item_Purch_3,
        CardLevel: ItemLevel3
    }, {
        CardName: Item_Purch_4,
        CardLevel: ItemLevel4
    }, {
        CardName: Item_Purch_5,
        CardLevel: ItemLevel5
    }]

    const toggleItemDescriptionView = (itemid: string) => {
        if(itemid == showedItem){
            return setShowedItem('')
        }
        setShowedItem(itemid)
    }

    const toggleUnknownPlayerView = () => {
        setUnknownPlayerShowed(!unknownPlayerShowed)
    }

    return (
        <>
            <div className={cl.TeamWrapper__item} onClick={() => toggleDetailedView(Damage_Taken)}
                 style={Win_Status == "Winner" ? {borderBottom: "2px solid #089E9C"} : {borderBottom: "2px solid #FF6C38"}}>
                <div className={cl.TeamWrapper__shortView}>
                    <div className={cl.TeamWrapper__item_portrait}>
                        <div className={cl.TeamWrapper__item_icon}><img
                            src={getChampionAvatar(Reference_Name)}
                            alt=""/></div>


                        <div className={cl.TeamWrapper__item_nameLevel}>{playerName ? `${playerName}, ` :
                            <div className={cl.unknownPlayer} onClick={e => e.stopPropagation()} onMouseOver={toggleUnknownPlayerView} onMouseOut={toggleUnknownPlayerView}>unknown player ?
                                <div className={cl.unknownPlayerHint} style={unknownPlayerShowed ? {display: "block"} : {display: "none"}}>
                                    Seems like Paladins API doesnt return nickname of this player, cause of player desire. We cant do anything to provide nickname of player for you.
                                </div>
                            </div>}
                            <span> {Account_Level}</span>
                        </div>


                    </div>
                    <div className={cl.TeamWrapper__item_kda}>{Kills_Player} / {Deaths} / {Assists}</div>
                    <div className={cl.TeamWrapper__item_rank}>
                        <div className={cl.TeamWrapper__item_rankIcon}>
                            <img src={rankInterpretate(League_Tier).iconPath} alt=""/>
                        </div>
                        <div className={cl.TeamWrapper__item_rankName}>{rankInterpretate(League_Tier).rankName}</div>
                    </div>
                </div>

                <div className={`${cl.TeamWrapper__detailedView} ${selectedItems.includes(Damage_Taken) && cl.active}`}>
                    <div className={cl.detailedView__header} onClick={(e) => e.stopPropagation()}>
                        <div className={cl.detailedView__header_boughtItems}>
                            {boughtItems.map(item =>
                                <div style={item.ActiveId == 0 ? {display: "none"} : {position: "relative"}} >
                                    <div className={cl.detailedView__boughtItems_item} onMouseOver={() => toggleItemDescriptionView(`${Damage_Taken}${item.ActiveId}`)} onMouseOut={() => toggleItemDescriptionView(`${Damage_Taken}${item.ActiveId}`)}>
                                        <img src={`https://static.paladins.guru/i/items/${item.ActiveId}.jpg`} alt=""/>
                                    </div>
                                    <div className={cl.detailedView__boughtItems_itemDesc} style={`${Damage_Taken}${item.ActiveId}` == showedItem ? {display: "block"} : {display: "none"}}>
                                        <div className={cl.detailedView__boughtItems_currentItemTitle}><span>{item.ItemActive}</span><span>Item Level: {item.ActiveLevel}</span></div>
                                        <div className={cl.detailedView__boughtItems_currentItemDesc}>{paladinsBuyableItemsLib(item.ActiveId).desc}</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className={cl.detailedView__header_talent}>{Item_Purch_6}</div>
                    </div>

                    <div className={cl.detailedView__stats}>
                        <div className={cl.detailedView__stats_item}>Damage Done <span>{Damage_Player}</span></div>
                        <div className={cl.detailedView__stats_item}>Damage Taken <span>{Damage_Taken}</span></div>
                        <div className={cl.detailedView__stats_item}>Healing <span>{Healing}</span></div>
                        <div className={cl.detailedView__stats_item}>Self Healing <span>{Healing_Player_Self}</span>
                        </div>
                        <div className={cl.detailedView__stats_item}>Shielding <span>{Damage_Mitigated}</span></div>
                    </div>
                    <div className={cl.detailedView__credits}>
                        <img
                            src="https://raw.githubusercontent.com/luissilva1044894/hirez-api-docs/master/.assets/paladins/icons/credits.png"
                            alt=""/> {Gold_Earned}
                    </div>
                    {/*<div className={cl.detailedView__cards}>*/}
                    {/*    {cardsItems.map(card =>*/}
                    {/*        <div className={cl.detailedView__cardsItems}>*/}
                    {/*            <div className={cl.detailedView__cardsItems_item}>{card.CardLevel}</div>*/}
                    {/*            <div className={cl.detailedView__cardsItems_itemDesc}></div>*/}
                    {/*        </div>*/}
                    {/*    )}*/}
                    {/*</div>*/}
                </div>
            </div>
        </>
    );
};

export default TeammateItem;