import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  let [result, setResult] = useState("");

  const clickButton = (e) => {
    if (result.length >= 16) {
      setResult("Large Input");
      setTimeout(() => {
        setResult("");
      }, 500);
      return;
    }

    if (result === "0" && e.target.name !== ".") {
      result = "";
    }
    setResult(result.concat(e.target.name));
  };

  const clickDel = () => {
    setResult(result.slice(0, result.length - 1));
  };

  const calculate = () => {
    try {
      result = eval(result).toString();
      if (result.includes(".")) {
        result = +eval(result);
        result = result.toFixed(4).toString();
        setResult(result);
      } else {
        setResult(eval(result).toString());
      }
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <div className="container">
      <form action="">
        <input type="text" value={result} readOnly />
      </form>

      <div className="keypad">
        <button onClick={() => setResult("")} className="color clear bcalc">
          Clear
        </button>
        <button onClick={clickDel} className="color backspace bcalc">
          C
        </button>
        <button name="/" onClick={clickButton} className="color bcalc">
          /
        </button>

        <button name="7" onClick={clickButton} className="bcalc">
          7
        </button>
        <button name="8" onClick={clickButton} className="bcalc">
          8
        </button>
        <button name="9" onClick={clickButton} className="bcalc">
          9
        </button>
        <button name="*" onClick={clickButton} className="color bcalc">
          *
        </button>

        <button name="4" onClick={clickButton} className="bcalc">
          4
        </button>
        <button name="5" onClick={clickButton} className="bcalc">
          5
        </button>
        <button name="6" onClick={clickButton} className="bcalc">
          6
        </button>
        <button name="-" onClick={clickButton} className="color bcalc">
          -
        </button>

        <button name="1" onClick={clickButton} className="bcalc">
          1
        </button>
        <button name="2" onClick={clickButton} className="bcalc">
          2
        </button>
        <button name="3" onClick={clickButton} className="bcalc">
          3
        </button>
        <button name="+" onClick={clickButton} className="color bcalc">
          +
        </button>

        <button name="0" onClick={clickButton} className="bcalc">
          0
        </button>
        <button name="." onClick={clickButton} className="bcalc">
          .
        </button>
        <button onClick={calculate} className="color equal bcalc">
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
