import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friendssmall.json";
import "./App.css";

class App extends Component {
  // setting this.state.friends to the friends json array
  // setting starting values for variables
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    currentMessage: `Click an image to begin`
  };


  // function when a card is clicked
  clickFriend = id => {

    console.log("I am in clickfriend & id = ", id);
    var index;
    // find the array index of the clicked character
    index = this.state.friends.findIndex(friend => friend.id == id);
    console.log("index = ", index);
    console.log("character = ", this.state.friends[index].name);
    console.log("clicked =", this.state.friends[index].clicked);
    console.log("before currentScore = ", this.state.currentScore);

    // logic when card has already been clicked 
    if (this.state.friends[index].clicked) {
      console.log("card has been clicked");
      var currentName = this.state.friends[index].name;

      // reset the current score to 0
      this.setState({ currentScore: 0 }, function () {
        console.log("Game over, already clicked");
      });

      // set the header message
      this.state.currentMessage = "Game Over!!  You already clicked " + currentName + ". \nThe game will restart.";

      // reset status of all clicked values to "false"
      this.state.friends.forEach(function (element) {
        element.clicked = false;
      });

      // resort the array to a random order
      friends.sort(function () { return 0.5 - Math.random() });

      // Set this.state.friends equal to the new friends array
      this.setState({ friends: friends });
    }

    // logic when new card has been clicked
    else {
      console.log("card has NOT NOT NOT NOT been clicked");
      // set the header message
      this.state.currentMessage = "Great Job!! You scored 1 more point."
      //set the friend status to "clicked"
      this.state.friends[index].clicked = true;
      // increment the current score
      this.setState({ currentScore: this.state.currentScore + 1 }, function () {
        console.log("after click currentScore = ", this.state.currentScore);
        console.log("Game Not over, play more");
        console.log("high score before", this.state.highScore);
        console.log("length = ", this.state.friends.length, " score = ", this.state.currentScore);
        // determine if this is the new high score
        if (this.state.currentScore > this.state.highScore) {
          console.log("current is > high");
          this.state.highScore = this.state.currentScore;
          this.setState({ highScore: this.state.highScore });
          console.log("high score after", this.state.highScore);
        }
        // logic if all cards have been selected
        if (this.state.currentScore == this.state.friends.length) {
          // set the header message
          this.state.currentMessage = "Great Job!! You clicked on every character.  The game will restart."
          // reset the current score
          this.setState({ currentScore: 0 }, function () {
            console.log("after click currentScore = ", this.state.currentScore);
          });
          // reset the status of all clicked values to false
          this.state.friends.forEach(function (element) {
            element.clicked = false;
          });
        }
      });

      // resort the array to a random order
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
          message={this.state.currentMessage}>Memory Game</Title>

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

      </Wrapper>
    );
  }
}

export default App;
