import React, { useEffect } from "react";
import { useState } from "react";
import "../styles.css";

function Decent() {
	//in this decent, we will treat the state as an array
	const [box, setBox] = useState(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
	const [isXturn, setIsXTurn] = useState(true);
	const [gameOver, setGameOver] = useState(false);
	const [winner, setWinner] = useState("");
	const [reset, setReset] = useState(false);

	function resetGame() {
		setReset(true);
		//take all the box
		//make new, empty it,
		//set values

		if (reset) {
			const resettedBox = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
			setBox(resettedBox);
			setReset(false);
			setGameOver(false);
			setWinner("");
		}
	}

	function takeTurn(index) {
		//to make a change on single element, you cant just change one element in array only.
		//instead, you need to change the whole array.
		//by taking those array into the new one,
		//changing those specific array element in index by X or O as you need,
		//setBox with those new array

		const updateBox = [...box];
		if (box[index] !== "X" && box[index] !== "O") {
			if (isXturn) {
				updateBox[index] = "X";
			} else {
				updateBox[index] = "O";
			}
			setBox(updateBox);
			setIsXTurn(!isXturn);
			gameOverCondition();
		}
	}

	//set Winning condition
	// a wiining condition will be met if
	//same value found on 0 1 2
	//3 4 5
	// 6 7 8
	// 0 3 6
	// 1 4 7
	// 2 5 8
	// 0 4 8
	// 2 4 6

	function whoWinner() {
		if (isXturn) {
			setWinner("O");
		} else {
			setWinner("X");
		}
	}

	function gameOverCondition() {
		if (box[0] === box[1] && box[1] === box[2] && box[1] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[3] === box[4] && box[3] === box[5] && box[3] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[6] === box[7] && box[6] === box[8] && box[6] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[0] === box[3] && box[0] === box[6] && box[0] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[1] === box[4] && box[1] === box[7] && box[1] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[2] === box[5] && box[2] === box[8] && box[2] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[0] === box[4] && box[0] === box[8] && box[0] != "") {
			setGameOver(true);
			whoWinner();
		} else if (box[2] === box[4] && box[2] === box[6] && box[2] != "") {
			setGameOver(true);
			whoWinner();
		}
		console.log("This is winner", winner);
	}

	useEffect(() => {
		gameOverCondition();
	}, [box, reset]);

	if (gameOver === true) {
		return (
			<div>
				Game is Over. winner is : {winner} reseting game ?{" "}
				<div onClick={() => resetGame()}>Reset</div>
			</div>
		);
	} else {
		return (
			<div className="gameboard">
				{box.map(function (e, index) {
					return (
						<div
							className="containerDecent"
							key={index}
							onClick={() => takeTurn(index)}
						>
							{e}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Decent;
