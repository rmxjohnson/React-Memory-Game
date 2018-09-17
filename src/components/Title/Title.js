import React from "react";
import "./Title.css";

const Title = props =>
    (
        <div id='title-heading'>
            <div className="jumbotron jumbotron-fluid">

                <nav className='navbar'>
                    <ul>
                        <li className='brand link'>
                            <h1><a href="/"> {props.children}</a></h1>
                        </li>
                        {/* "Game Over" or "WINNER" message will be in orange, all other messages will be in white */}
                        <li id="message"
                            style={{ color: (props.message.startsWith("Game") || props.message.startsWith("WIN")) ? "orange" : "white" }}>
                            <h3>{props.message}</h3></li>
                        <li id="scores">
                            <h3>Current Score: {props.score}</h3>
                            <h3>High Score: {props.high}</h3>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* dynamic message that will change throughout the game */}
            <div className='container'>
                <header className="header">
                    <h2 id="directions">Click on an image to earn points, but don't click any image more than once!</h2>
                </header>

            </div>
        </div>
    )

export default Title;
