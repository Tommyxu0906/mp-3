import { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState<number | "">("");
  const [num2, setNum2] = useState<number | "">("");
  const [result, setResult] = useState<number | string>("");

  const calculate = (operation: string) => {
    if (num1 === "" || num2 === "") {
      setResult("Error: Enter valid numbers");
      return;
    }
    const n1 = Number(num1);
    const n2 = Number(num2);
    switch (operation) {
      case "+": setResult(n1 + n2); break;
      case "-": setResult(n1 - n2); break;
      case "*": setResult(n1 * n2); break;
      case "/": setResult(n2 !== 0 ? n1 / n2 : "Error: Division by zero"); break;
      case "**": setResult(n1 ** n2); break;
      default: setResult("Invalid Operation");
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value === "" ? "" : Number(e.target.value))} placeholder="Enter first number" />
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value === "" ? "" : Number(e.target.value))} placeholder="Enter second number" />
      <div>
        <button onClick={() => calculate("+")}>+</button>
        <button onClick={() => calculate("-")}>-</button>
        <button onClick={() => calculate("*")}>*</button>
        <button onClick={() => calculate("/")}>/</button>
        <button onClick={() => calculate("**")}>**</button>
        <button onClick={() => { setNum1(""); setNum2(""); setResult(""); }}>Clear</button>
      </div>
      <h3>Result: {result}</h3>
    </div>
  );
};

export default Calculator;