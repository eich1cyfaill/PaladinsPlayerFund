import React from 'react';
import cl from '../../styles/ChampionList.module.css'
import ChampionsFilter from './ChampionFilter';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useChampions } from '../../hooks/useChampions';


const ChampionList: React.FC = () => {
    const {championSearchRole, championSearchQuery, championList} = useTypeSelector(state => state.championListReducer)
    const filteredChampions = useChampions(championList, championSearchQuery, championSearchRole)
    return (
        <div className={cl.championList__filter_wrapper}>
            <ChampionsFilter />
            <div className={cl.championList__wrapper}>
                {filteredChampions.map(ch =>
                    <div className={cl.championList__wrapper_item}>
                        <div className={cl.championList__wrapper_item_image}>
                            { ch.image ? ch.image : <img src={require("../../image/andro.jpg")} alt=""/>}
                        </div>
                        <div className={cl.championList__wrapper_item_role}>{ch.role}</div>
                        <div className={cl.championList__wrapper_item_name}>{ch.name}</div>
                    </div>
                )}

            </div>
        </div>
    );
};

export default ChampionList;