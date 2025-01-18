import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: " #6c5101",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        bottom: "0",
        overflow: "hidden",
        left: "0",
        right: "0",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 166, 0, 0.84)",
          width: "40%",
          height: "76%",
          padding: "30px",
          border: "solid white 2px",
          borderRadius: "20px",
          boxShadow: "0px 7px 7px rgba(255, 255, 255, 0.46)",
        }}
      >
        <Form />
      </div>
    </div>
  );
}

export default App;
