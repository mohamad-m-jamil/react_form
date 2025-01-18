import Form from "./Form";
export default function ErrorName({ closeModal }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.34)",
        width: "100%",
        height: "100%",
        position: "fixed",
        top: "0",
        bottom: "0",
        overflow: "hidden",
        left: "0",
        right: "0",
      }}
      onClick={closeModal}
    >
      <div
        style={{
          backgroundColor: "rgb(255, 25, 0)",
          width: "100%",
          height: "10%",
          padding: "30px",
          border: "solid white 2px",
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <span style={{ fontFamily: "initial", fontSize: "40px" }}>
          Enter Your Name
        </span>
      </div>
    </div>
  );
}
