import React, { useState } from 'react';
import cl from '../styles/Footer.module.css'
import {useDispatch, useSelector} from "react-redux";
import DevPage from './dev/devPage';
import PfButton from '../userinterface/button/pfButton';
import { Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(false)


    const changeVisibility = () => {
        if(visibility == true){
            setVisibility(false)
        } else {
            setVisibility(true)
        }
    }

    return (
        <div className={cl.footer} onClick={() => changeVisibility()}>
            <div className={`${cl.footerClosed} ${visibility === false ? cl.footerClosedShown : cl.closedFooterUnshown}`}>Click to open</div>
            <div className={`${cl.footerOpened} ${visibility === true ? cl.footerOpenedShown : cl.openedFooterUnshown}`}>
            {/*            <NavLink to='dev'><PfButton>Dev</PfButton></NavLink>*/}
                Code of this application uploaded at <a href="https://github.com/eich1cyfaill/PaladinsPlayerFund" target="_blank">GitHub</a>. Star it if you like it!
            </div>
        </div>
    );
};

export default Footer;