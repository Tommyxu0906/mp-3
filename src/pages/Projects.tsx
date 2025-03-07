// src/pages/Projects.tsx
import { useState } from "react";

const Projects = () => {
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
    <main>
      <h2>Projects</h2>

      <section>
        <h3>Mini eBay (E-commerce Platform)</h3>
        <p><strong>Technologies Used:</strong> HTML, CSS, Django, SQL</p>
        <p>Developed a mini eBay clone for users to buy and sell products. The platform allows user authentication, product listing, and secure transactions.</p>
        <p><a href="https://github.com/Tommyxu0906/cs412">GitHub Repository</a></p>
      </section>

      <section>
        <h3>Farmify (Dutch Auction App for Grocery)</h3>
        <p><strong>Technologies Used:</strong> React, C#, SQL</p>
        <p>Designed a Dutch auction platform for grocery sales, where prices decrease over time until an item is purchased. Integrated React for frontend and C# for backend logic.</p>
        <p><a href="https://github.com/AdiBhan/Farmify">GitHub Repository</a></p>
      </section>

      <section>
        <h3>Petcare App</h3>
        <p><strong>Technologies Used:</strong> React Native, Nativewind CSS, SQL</p>
        <p>Developed a mobile app for pet care services, including pet profiles, appointment scheduling, and healthcare tracking. Focused on creating a responsive UI/UX.</p>
      </section>

      <section>
        <h3>JavaScript Calculator</h3>
        <p>Enter two numbers and select an operation:</p>
        <div className="calculator-container">
          <div className="input-group">
            <input type="number" value={num1} onChange={(e) => setNum1(e.target.value === "" ? "" : Number(e.target.value))} placeholder="Enter first number" />
            <input type="number" value={num2} onChange={(e) => setNum2(e.target.value === "" ? "" : Number(e.target.value))} placeholder="Enter second number" />
          </div>
          <div className="button-group">
            <button onClick={() => calculate("+")}>+</button>
            <button onClick={() => calculate("-")}>-</button>
            <button onClick={() => calculate("*")}>*</button>
            <button onClick={() => calculate("/")}>/</button>
            <button onClick={() => calculate("**")}>**</button>
            <button onClick={() => { setNum1(""); setNum2(""); setResult(""); }}>Clear</button>
          </div>
          <h3>Result: {result}</h3>
        </div>
      </section>
    </main>
  );
};

export default Projects;
