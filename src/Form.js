import "./App.css";
import { useState } from "react";
import ErrorName from "./ErrorName";
import ErrorNumber from "./ErrorNumber";
import ErrorCheck from "./ErrorCheck";
import ErrorAge from "./ErrorAge";
import Done from "./Done";

export default function Form() {
  const [info, setinfo] = useState({
    name: "",
    number: "",
    age: "",
    checkbox: false,
    salary: "",
  });
  const [done, setdone] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorNumber, setErrorNumber] = useState(false);
  const [errorAge, setErrorAge] = useState(false);
  const [errorCheck, setErrorCheck] = useState(false);

  function handelsubmet(event) {
    event.preventDefault();
    if (info.name === "") {
      setdone(false);
      setErrorName(true);
      return;
    } else setErrorName(false);
    if (info.number === "") {
      setdone(false);
      setErrorNumber(true);
      return;
    } else setErrorNumber(false);
    if (info.age === "") {
      setdone(false);
      setErrorAge(true);
      return;
    } else setErrorAge(false);
    if (info.checkbox === false) {
      setdone(false);
      setErrorCheck(true);
      return;
    } else setErrorCheck(false);
    setdone(true);
  }
  function closeModal() {
    setdone(false);
    setinfo({ name: "", number: "", age: "", checkbox: false, salary: "" });
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handelsubmet}>
        <div style={{ marginLeft: "20px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h1 style={{ margin: "15px" }}>Requesting a Loan</h1>
          </div>
          <hr></hr>
          <div style={{ marginLeft: "10px" }}>
            {/* ///////////////////////////////////Nmae */}
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                  fontSize: "20px",
                }}
              >
                Name :{" "}
              </span>
              <input
                style={{ marginLeft: "30px" }}
                className="inp"
                value={info.name}
                onChange={(e) => {
                  setinfo({ ...info, name: e.target.value });
                }}
                type="text"
                pattern="[^0-9]*"
                title="Numbers are not allowed"
              />
            </div>

            {/* /////////////////////////////////Number */}
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                  fontSize: "20px",
                }}
              >
                Number :{" "}
              </span>
              <input
                style={{ marginLeft: "30px" }}
                className="inp"
                value={info.number}
                onChange={(e) => {
                  setinfo({ ...info, number: e.target.value });
                }}
                type="text"
                pattern="\d{8}"
                title="Please enter exactly 8 digits"
              />
            </div>

            {/* ///////////////////////////////////Age */}
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                  fontSize: "20px",
                }}
              >
                Age :{" "}
              </span>
              <input
                style={{ marginLeft: "30px" }}
                className="inp"
                value={info.age}
                onChange={(e) => {
                  setinfo({ ...info, age: e.target.value });
                }}
                type="number"
                min="18"
                max="100"
                step="1"
              />
            </div>

            {/* ///////////////////////////////////check */}
            <div>
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                  fontSize: "20px",
                  marginRight: "34px",
                  marginTop: "10px",
                }}
              >
                Are you an employee?
              </span>
              <input
                style={{
                  appearance: "none",
                  width: "20px",
                  height: "20px",
                  backgroundColor: info.checkbox
                    ? "#4CAF50"
                    : "rgba(255, 166, 0, 0.84)",
                  border: "2px solid #ccc",
                  borderRadius: "4px",
                  cursor: "pointer",
                  display: "inline-block",
                  outline: "none",
                  marginLeft: "30px",
                  marginLeft: "125px",
                }}
                className="inp"
                checked={info.checkbox}
                onChange={(e) => {
                  setinfo({ ...info, checkbox: e.target.checked });
                }}
                type="checkbox"
              />
            </div>

            {/* ///////////////////////////////////////choose */}
            <div>
              <label
                style={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                  fontSize: "20px",
                }}
              >
                Salary :{" "}
              </label>
              <select
                style={{
                  width: "200px",
                  height: "40px",
                  backgroundColor: "#f8f9fa",
                  border: "2px solid #4CAF50",
                  borderRadius: "8px",
                  padding: "5px 10px",
                  fontSize: "16px",
                  color: "#333",
                  cursor: "pointer",
                  outline: "none",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  marginLeft: "40px",
                }}
                value={info.salary}
                onChange={(e) => {
                  setinfo({ ...info, salary: e.target.value });
                }}
              >
                <option value="option1">Less than 500$</option>
                <option value="option2">Between 500$ and 2000$</option>
                <option value="option3">Above 2000$</option>
              </select>
            </div>

            {/* ///////////////////////////////////////button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "10px",
                fontSize: "20px",
              }}
            >
              <button className="butsub">Submit</button>
            </div>
          </div>
        </div>
      </form>
      <div>
        {errorName && <ErrorName closeModal={() => setErrorName(false)} />}
        {errorNumber && (
          <ErrorNumber closeModal={() => setErrorNumber(false)} />
        )}
        {errorAge && <ErrorAge closeModal={() => setErrorAge(false)} />}
        {errorCheck && <ErrorCheck closeModal={() => setErrorCheck(false)} />}
        {done && <Done closeModal={closeModal} />}
      </div>
    </div>
  );
}
