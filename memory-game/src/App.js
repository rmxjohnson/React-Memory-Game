import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
//import friends from "./friendssmall.json";   // a set of only 5 characters
import "./App.css";

class App extends Component {
  // setting this.state.friends to the friends json array
  // setting starting values for variables
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    currentMessage: `Click on an image to earn points, but don't click any image more than once!`
  };


  // function when a card is clicked
  clickFriend = id => {
    var index;
    // find the array index of the clicked character
    index = this.state.friends.findIndex(friend => friend.id == id);

    // logic when card has already been clicked 
    if (this.state.friends[index].clicked) {
      var currentName = this.state.friends[index].name;

      // reset the current score to 0
      this.state.currentScore = 0;

      // set the header message
      this.state.currentMessage = `Game Over!!   You already clicked ${currentName}. The game will restart.`;

      // reset status of all clicked values to "false"
      this.state.friends.forEach(function (element) {
        element.clicked = false;
      });

      // resort the array to display in a random order
      friends.sort(function () { return 0.5 - Math.random() });

      // Set this.state.friends equal to the new friends array
      this.setState({ friends: friends });
    }

    // logic when new card has been clicked
    else {
      // set the header message
      this.state.currentMessage = `Great Job!!  
      You scored 1 more point.`
      //set the friend status to "clicked"
      this.state.friends[index].clicked = true;

      // increment the current score
      this.setState({ currentScore: this.state.currentScore + 1 }, function () {
        // determine if this is the new high score
        if (this.state.currentScore > this.state.highScore) {
          this.state.highScore = this.state.currentScore;
          this.setState({ highScore: this.state.highScore });
        }
        // logic if all cards have been selected
        if (this.state.currentScore == this.state.friends.length) {
          // set the header message
          this.state.currentMessage = "WINNER!! You clicked on every character.  The game will restart."
          // reset the current score
          this.state.currentScore = 0;

          // reset the status of all clicked values to false
          this.state.friends.forEach(function (element) {
            element.clicked = false;
          });
        }
      });

      // resort the array to display in a random order
      friends.sort(function () { return 0.5 - Math.random() });
      // Set this.state.friends equal to the new friends array
      this.setState({ friends: friends });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>

        <Title score={this.state.currentScore} high={this.state.highScore}
          message={this.state.currentMessage}>Looney Tunes Memory Game</Title>

        <section>
          {this.state.friends.map(friend => (
            <FriendCard
              clickFriend={this.clickFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              clicked={friend.clicked}
            />
          ))}
        </section>


      </Wrapper>
    );
  }
}

export default App;
