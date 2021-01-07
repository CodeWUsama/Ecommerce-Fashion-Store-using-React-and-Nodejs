import React, { Component } from 'react';
import AnimatedText from './animatedText';
import classes from "./Home.module.css";

export default class Home extends Component {
    render() {
        return (
            <div className={classes.rootCont}>
                <AnimatedText/>
            </div>
        );
    }
}