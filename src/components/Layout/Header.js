import React from 'react';
import HeaderCartButton from "./HeaderCartButton";
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
// classes["header"] or classes.header

const Header = props =>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes["main-image"]}>
            <img src={mealsImage} alt="A table of delicious food!"/>
        </div>
    </React.Fragment>

}

export default Header;