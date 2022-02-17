import React from 'react';
import cl from '../../styles/PlayerSearch.module.css'
import PfButton from '../../userinterface/button/pfButton';
import PfInput from '../../userinterface/input/pfInput';
import { useTypeSelector } from '../../hooks/useTypeSelector';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';



const PlayerSearch: React.FC = () => {
    const navigate = useNavigate()
    const {playerSearchValue, currentServer} = useTypeSelector(state => state.playerSearchReducer)
    const {acThrowServerData, acThrowPlayerSearchInputValue} = useActions()



    const ThrowNameToSearch = async() => {
        await navigate(`/profile/${playerSearchValue}`)
    }

    return (
        <div className={cl.playerSearch__wrapper}>
            <div className={cl.playerSearch}>
                <div className={cl.playerSearch__title}>Type a player name</div>
                <div className={cl.playerSearch__input}><PfInput placeholder="Nickname placeholder" value={playerSearchValue} onChange={(e: any) => {acThrowPlayerSearchInputValue(e.currentTarget.value)}}/></div>
                <div className={cl.playerSearch__buttonsFamily}>
                    <PfButton onClick={ThrowNameToSearch}>Search</PfButton>
                </div>
            </div>
        </div>
    );
}

export default PlayerSearch;