import React, { useState, useEffect } from 'react';
import cl from '../styles/Header.module.css'
import {Link} from "react-router-dom";
import set = Reflect.set;


const Header: React.FC = () => {
    const [visibility, setVisibility] = useState(false)

    const openHeader = () => {
        setVisibility(true)
    }

    const closeHeader = () => {
        setVisibility(false)
    }

    return (
        <div className={cl.header} onMouseOver={openHeader} onMouseOut={closeHeader}>


            <div className={cl.header__title_wrapper} style={visibility === false ? {visibility: "visible"} : {visibility: "hidden",  height: 0}}>
                <Link to="players"><div className={cl.header_title}>Paladins Players Fund</div></Link>
            </div>



            <div className={cl.header__menu} style={visibility === false ? {visibility: "hidden", height: 0} : {visibility: "visible"}}>
                <div className={cl.header_itemlist}>
                    <Link to="players"><div className={cl.header_itemlist__item}>Player Search</div></Link>
                    {/*<Link to="champions"><div className={cl.header_itemlist__item}>Champions</div></Link>*/}
                    <Link to="ranking"><div className={cl.header_itemlist__item}>Ranking</div></Link>
                    {/*<Link to="settings"><div className={cl.header_itemlist__item}>Settings</div></Link>*/}
                </div>
            </div>

        </div>
    );
};

export default Header;