import React, { useState } from "react";
import { toast } from "react-toastify";

function Game1() {
  const [message, setMessage] = useState("Silahkan Mulai Permainan");
  const [startGame, setStartGame] = useState(false);
  const [guess, setGuess] = useState("");
  const [randomNum, setRandomNum] = useState(generateNum());
  const [chance, setChance] = useState(0);

  function generateNum() {
    return Math.floor(Math.random() * 10) + 11;
  }

  const gameStart = () => {
    setStartGame(true);
    setMessage("Silahkan Mulai Permainan Anda");
  };

  const handleGuess = () => {
    const userGuess = parseInt(guess, 10);

    setChance(chance + 1);

    if (chance === 3) {
      toast.error("Game Over");
      setStartGame(true);
    } else if (userGuess < randomNum) {
      toast.error("Nilai Inputan Terlalu Kecil");
    } else if (userGuess === randomNum) {
      setChance(4);
      toast.success("Congratulation!! Anda Menang");
      setStartGame(true);
    } else if (userGuess > randomNum){
      toast.error("Nilai Inputan Terlalu Besar");
    }else{
      toast.error("Input tidak Boleh Kosong")
    }

    setGuess("");
  };

  const reset = () => {
    setStartGame(true);
    setMessage("Silahkan Mulai Permainan Anda");
    setChance(0)
    setRandomNum(generateNum());
  }

  return (
    <div className="p-5">
      <h1 className="mb-2">Number Guessing Game</h1>
      <div className="row align-item-center">
        <div className="col-md-6">
          <div className="d-flex justify-content-start align-item-center">
            <div>
              <p className="text-start mb-3 mt-2">
                1. Each player gets 4 chances to guess
              </p>
              <p className="text-start mb-3 mt-2">
                2. Number range is between 11-20
              </p>
              <p className="text-start mb-3 mt-2">
                3. You can reset the number after 4 wrong answers
              </p>
              {!startGame ? (
                <div className="mt-5">
                  <p className="text-start">{message}</p>
                  <div className="d-flex justify-content-start mt-5">
                    <button onClick={gameStart} className="btn btn-success">
                      Mulai Permainan
                    </button>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  <label className="form-label d-block text-start mt-4">Input Angka</label>
                  <input
                    type="number"
                    className="form-control"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                    placeholder="Input Angka 11 - 20"
                    disabled={chance === 4}
                  />
                  <p className="text-start mt-3">
                    Nilai Aslinya Adalah {randomNum}
                  </p>

                  <p className="text-start mt-4">
                    Jumlah Tebakan {chance}
                  </p>

                  {chance < 4 ? (
                    <div className="d-flex justify-content-start mt-3">
                      <button className="btn btn-primary" onClick={handleGuess}>
                        Tebak Angka
                      </button>
                    </div>
                  ) : (
                    <div className="d-flex justify-content-start mt-3">
                      <button className="btn btn-danger" onClick={reset}>Reset</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Game1;
