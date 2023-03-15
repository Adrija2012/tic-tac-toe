import React, { useState, useEffect } from 'react';
import './App.css';
import Cel from './components/Cel';
function App() {
  const [board, setBoard] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"])
  const [whoTurn, changeWhoTurn] = useState("X")
  const [whoWon, changeWhoWon] = useState("-")
  const [playerToCheck, playerToCheckchange] = useState("X")
  const [isItADraw,setDraw] = useState(false)
  var celIndicator = (index) => {
    if (board[index] != "-") {
      return
    }
    var any = [...board]
    any[index] = whoTurn
    setBoard(any)
    playerToCheckchange(whoTurn)
    if (whoTurn == "X") {
      changeWhoTurn("O")
    }
    else {
      changeWhoTurn("X")
    }

  }
  useEffect(()=>{
    winner()
  },[board])
  function refreshBoard() {
    var restart = [...board]
    for (var i = 0; i < 9; i++) {
      restart[i] = "-"
    }
    setBoard(restart)
   changeWhoWon("-")
   setDraw(false)
  }
  function winner() {
    console.log(whoWon)
    if (board[0] === board[1] && board[1] === board[2] && board[0] === playerToCheck) {
     console.log("running")
      changeWhoWon(playerToCheck)
    }
    else if (board[3] === board[4] && board[4] === board[5] && board[3]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
    else if (board[6] === board[7] && board[7] === board[8] && board[6]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
    else if (board[0] === board[3] && board[3] === board[6] && board[0]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
    else if (board[1] === board[4] && board[4] === board[7] && board[1]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
    else if (board[2] === board[5] && board[5] === board[8] && board[2]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
    else if (board[0] === board[4] && board[4] === board[8] && board[0]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
    else if (board[2] === board[4] && board[4] === board[6] && board[2]=== playerToCheck) {
      changeWhoWon(playerToCheck)
    }
  //  Checking if the whole board is filled or not
    else{
     var count=0
      for (var i = 0; i < 9; i++) {
      if(board[i]=="-")
      {
        count+=1
      }
      }
      if(count==0)
      {
        setDraw(true)
      }
  }

  }
 
  return (
    <div id="alignments">
      {
        whoWon!=="-"?<h1 id="winner">{whoWon} wins the game!</h1>: null
      }
       {
        isItADraw==true?<h1 id="winner">It is a draw.</h1>: null
      }
      <h1>Tic-Tac-Toe</h1>
      <div>
        <Cel text={board[0]} indexOfcel={0} changeIndexOfcel={celIndicator} />
        <Cel text={board[1]} indexOfcel={1} changeIndexOfcel={celIndicator} />
        <Cel text={board[2]} indexOfcel={2} changeIndexOfcel={celIndicator} />
      </div>
      <div>
        <Cel text={board[3]} indexOfcel={3} changeIndexOfcel={celIndicator} />
        <Cel text={board[4]} indexOfcel={4} changeIndexOfcel={celIndicator} />
        <Cel text={board[5]} indexOfcel={5} changeIndexOfcel={celIndicator} />
      </div>
      <div>
        <Cel text={board[6]} indexOfcel={6} changeIndexOfcel={celIndicator} />
        <Cel text={board[7]} indexOfcel={7} changeIndexOfcel={celIndicator} />
        <Cel text={board[8]} indexOfcel={8} changeIndexOfcel={celIndicator} />
      </div>
      <h2>Turn: {whoTurn}</h2>
      <button id="btn" onClick={refreshBoard}>Clear Board</button>
      
    </div>
  );
}

export default App;
