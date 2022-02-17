import React from 'react';
import cl from "../../styles/ChampionList.module.css";
import PfInput from "../../userinterface/input/pfInput"
import PfButton from "../../userinterface/button/pfButton";
import {useDispatch, useSelector} from "react-redux";
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';

const ChampionsFilter: React.FC = () => {
    const {championSearchQuery, championSearchRole} = useTypeSelector(state => state.championListReducer)
    const {acThrowChampionQuery, acThrowChampionRole} = useActions()

    return (
        <div className={cl.championList__filter}>
            <div className={cl.championList__filter_input}>
                <PfInput placeholder='Type a champion name' value={championSearchQuery} onChange={(e: any) => acThrowChampionQuery(e.target.value)}/>
            </div>
            <PfButton value='Tank' active={'Tank' === championSearchRole ? true : false} onClick={() => acThrowChampionRole('Tank')}>Tank</PfButton>
            <PfButton value='Damage' active={'Damage' === championSearchRole ? true : false} onClick={(e: any) => acThrowChampionRole(e.target.value)}>Damage</PfButton>
            <PfButton value='Healer' active={'Healer' === championSearchRole ? true : false} onClick={(e: any) => acThrowChampionRole(e.target.value)}>Healer</PfButton>
            <PfButton value='Flanker' active={'Flanker' === championSearchRole ? true : false} onClick={(e: any) => acThrowChampionRole(e.target.value)}>Flanker</PfButton>
        </div>
    );
};

export default ChampionsFilter;