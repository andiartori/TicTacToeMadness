import React from "react";

function TicTacToeBeginner() {
	const [box1, setBox1] = useState("");
	const [box2, setBox2] = useState("");
	const [box3, setBox3] = useState("");

	const [box4, setBox4] = useState("");
	const [box5, setBox5] = useState("");
	const [box6, setBox6] = useState("");

	const [box7, setBox7] = useState("");
	const [box8, setBox8] = useState("");
	const [box9, setBox9] = useState("");

	return (
		<>
			<div>
				<h1>Tic Tac Toe Poor Data Structure</h1>

				<div className="box">
					<div>
						<div className="container">1 {box1}</div>
						<div className="container">2 {box2}</div>
						<div className="container">3 {box3}</div>
					</div>

					<div>
						<div className="container">4 {box4}</div>
						<div className="container">5 {box5}</div>
						<div className="container">6 {box6}</div>
					</div>

					<div>
						<div className="container">7 {box7}</div>
						<div className="container">8 {box8}</div>
						<div className="container">9 {box9}</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TicTacToeBeginner;
