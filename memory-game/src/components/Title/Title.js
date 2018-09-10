import React from "react";
import "./Title.css";

const Title = props =>
    (
        <div>
            <div className='container'>
                <nav className='navbar'>
                    <ul>
                        <li className='brand link'>
                            <h3><a href="/"> {props.children}</a></h3>
                        </li>
                        <li id="message"><h3>{props.message}</h3></li>
                        <li id="scores">
                            <h3>Score: {props.score} | High Score: {props.high}</h3>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className='container'>
                <header className="header">
                    <h1> {props.children}</h1>
                    <h2>Click on an image to earn points, but don't click any image more then once!</h2>
                </header>

            </div>
        </div>)

export default Title;
