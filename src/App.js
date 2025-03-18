import "./styles.css";
import { useState, useEffect } from "react";
// Ada 9 state untuk diolah
// setiap click, akan bergantian untuk o dan x => sistem flag
//apply-stat baru ketika klik dengan X atau O
//kembalikan flag tanda sudah jalan

//winning condition
//1. jika array ke 0 , 3 dan 6 sama
//2. jika array ke 1 , 4 dan 7 sama
//3. jika array ke 2 , 5, dan 8 sama
//4. jika array ke 0, 4 , 8 sama
//5. jika array ke 0 , 1 , 2 sama
//6. jika array ke 3 ,4 , 5 sama
//7. jika array ke 6 , 7 , 8 sama

//resetting for easines of development

export default function App() {
  const [stat, setStat] = useState(["", "", "", "", "", "", "", "", ""]);
  const [changePlayer, setChangePlayer] = useState(false);
  const [winner, setWinner] = useState(false);
  const [reset, isReset] = useState(false);

  const isWinner = () => {
    if (stat[0] && stat[0] === stat[3] && stat[3] === stat[6]) {
      setWinner(true);
    } else if (stat[1] && stat[1] === stat[4] && stat[4] === stat[7]) {
      setWinner(true);
    } else if (stat[2] && stat[2] === stat[5] && stat[5] === stat[8]) {
      setWinner(true);
    } else if (stat[0] && stat[0] === stat[4] && stat[4] === stat[8]) {
      setWinner(true);
    } else if (stat[0] && stat[0] === stat[1] && stat[1] === stat[2]) {
      setWinner(true);
    } else if (stat[3] && stat[3] === stat[4] && stat[4] === stat[5]) {
      setWinner(true);
    } else if (stat[6] && stat[6] === stat[7] && stat[7] === stat[8]) {
      setWinner(true);
    }
  };

  const move = (area) => {
    const newStat = [...stat];
    newStat[area] = changePlayer ? "X" : "O";
    setStat(newStat);
    setChangePlayer(!changePlayer);
    isWinner();
  };

  useEffect(() => {
    isWinner();
  }, [stat]);

  return (
    <>
      {" "}
      {winner ? (
        <div>GameOver</div>
      ) : (
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          {/* buat 9 part box */}
          {/* Classname via flex */}
          {/* Make sure the content is inside */}
          {/* sizing the box ? */}

          <div className="box">
            <div>
              <div className="container" onClick={() => move(0)}>
                {stat[0]} kotak 0
              </div>
              <div className="container" onClick={() => move(1)}>
                {stat[1]} kotak 1
              </div>
              <div className="container" onClick={() => move(2)}>
                {stat[2]} kotak 2
              </div>
            </div>

            <div>
              <div className="container" onClick={() => move(3)}>
                {stat[3]} kotak 3
              </div>
              <div className="container" onClick={() => move(4)}>
                {stat[4]} kotak 4
              </div>
              <div className="container" onClick={() => move(5)}>
                {stat[5]} kotak 5
              </div>
            </div>

            <div>
              <div className="container" onClick={() => move(6)}>
                {stat[6]} kotak 6
              </div>
              <div className="container" onClick={() => move(7)}>
                {stat[7]} kotak 7
              </div>
              <div className="container" onClick={() => move(8)}>
                {stat[8]} kotak 8
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
