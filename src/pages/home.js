import React, { useEffect, useState } from "react";
import "../styles.css";

function Home() {
	const [box1, setBox1] = useState("");
	const [box2, setBox2] = useState("");
	const [box3, setBox3] = useState("");

	const [box4, setBox4] = useState("");
	const [box5, setBox5] = useState("");
	const [box6, setBox6] = useState("");

	const [box7, setBox7] = useState("");
	const [box8, setBox8] = useState("");
	const [box9, setBox9] = useState("");

	const [isXturn, setIsXturn] = useState(true);
	const [gameOver, setGameOver] = useState(true);
	const [winner, setWinner] = useState("");
	const [reset, isReset] = useState(true);
	const [draw, setDraw] = useState(false);

	//make a function to repllace the "" into X or O based on index

	function takeTurn(index) {
		if (index == 1 && box1 == "") {
			if (isXturn) {
				setBox1("X");
			} else {
				setBox1("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 2 && box2 == "") {
			if (isXturn) {
				setBox2("X");
			} else {
				setBox2("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 3 && box3 == "") {
			if (isXturn) {
				setBox3("X");
			} else {
				setBox3("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 4 && box4 == "") {
			if (isXturn) {
				setBox4("X");
			} else {
				setBox4("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 5 && box5 == "") {
			if (isXturn) {
				setBox5("X");
			} else {
				setBox5("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 6 && box6 == "") {
			if (isXturn) {
				setBox6("X");
			} else {
				setBox6("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 7 && box7 == "") {
			if (isXturn) {
				setBox7("X");
			} else {
				setBox7("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 8 && box8 == "") {
			if (isXturn) {
				setBox8("X");
			} else {
				setBox8("O");
			}
			setIsXturn(!isXturn);
		} else if (index == 9 && box9 == "") {
			if (isXturn) {
				setBox9("X");
			} else {
				setBox9("O");
			}
			setIsXturn(!isXturn);
		}
	}

	//make a wiining condition
	//condition will win if :
	//in line 1 , 4 , 7
	//inline 2 , 5 , 8
	//inLine 3 , 6 , 9

	//inline down 1 ,2 ,3
	//inLine down 4 ,5 ,6
	//inLine down 7, 8, 9

	//diagonal 1, 5, 9
	function gameOverCheck() {
		if (
			box1 === "" &&
			box2 === "" &&
			box3 === "" &&
			box4 === "" &&
			box5 === "" &&
			box6 === "" &&
			box7 === "" &&
			box8 === "" &&
			box9 == ""
		) {
			setGameOver(false);
		} else if (box1 !== "" && box1 === box4 && box1 === box7) {
			setGameOver(true);
			whoIsWinner();
		} else if (box2 !== "" && box2 === box5 && box2 === box8) {
			setGameOver(true);
			whoIsWinner();
		} else if (box3 !== "" && box3 === box6 && box3 === box9) {
			setGameOver(true);
			whoIsWinner();
		} else if (box1 !== "" && box1 === box2 && box1 === box3) {
			setGameOver(true);
			whoIsWinner();
		} else if (box4 !== "" && box4 === box5 && box4 === box6) {
			setGameOver(true);
			whoIsWinner();
		} else if (box7 !== "" && box7 === box8 && box7 === box9) {
			setGameOver(true);
			whoIsWinner();
		} else if (box1 !== "" && box1 === box5 && box1 === box9) {
			setGameOver(true);
			whoIsWinner();
		} else if (box3 !== "" && box3 === box5 && box7 === box3) {
			setGameOver(true);
			whoIsWinner();
		} else if (
			box1 !== "" &&
			box2 !== "" &&
			box3 !== "" &&
			box4 !== "" &&
			box5 !== "" &&
			box6 !== "" &&
			box7 !== "" &&
			box8 !== "" &&
			box9 !== "" &&
			setGameOver(false)
		) {
			setGameOver(true);
			setDraw(true);
		}
	}

	function whoIsWinner() {
		if (isXturn) {
			setWinner("O");
		} else {
			setWinner("X");
		}
	}
	function resetGame() {
		if (reset) {
			setBox1("");
			setBox2("");
			setBox3("");
			setBox4("");
			setBox5("");
			setBox6("");
			setBox7("");
			setBox8("");
			setBox9("");
		}
	}

	useEffect(() => {
		gameOverCheck();
	}, [box1, box2, box3, box4, box5, box6, box7, box8, box9]);

	//put winner
	if (gameOver && draw) {
		return (
			<div>
				DRAW
				<div onClick={() => resetGame()}>Reset game</div>
			</div>
		);
	}

	if (gameOver && !draw) {
		return (
			<div>
				Game is over the winner is
				{winner}
				<div onClick={() => resetGame()}>Reset game</div>
			</div>
		);
	} else {
		return (
			<>
				<div>
					<h1>Tic Tac Toe Poor Data Structure</h1>

					<div className="box">
						<div>
							<div className="container" onClick={() => takeTurn(1)}>
								1 {box1}
							</div>
							<div className="container" onClick={() => takeTurn(2)}>
								2 {box2}
							</div>
							<div className="container" onClick={() => takeTurn(3)}>
								3 {box3}
							</div>
						</div>

						<div>
							<div className="container" onClick={() => takeTurn(4)}>
								4 {box4}
							</div>
							<div className="container" onClick={() => takeTurn(5)}>
								5 {box5}
							</div>
							<div className="container" onClick={() => takeTurn(6)}>
								6 {box6}
							</div>
						</div>

						<div>
							<div className="container" onClick={() => takeTurn(7)}>
								7 {box7}
							</div>
							<div className="container" onClick={() => takeTurn(8)}>
								8 {box8}
							</div>
							<div className="container" onClick={() => takeTurn(9)}>
								9 {box9}
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Home;
