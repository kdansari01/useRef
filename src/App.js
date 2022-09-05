import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [show, setShow] = useState("");
  const inputOne = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputOne.current.value;
    setShow(name);
    if (name === "") {
      alert("input required");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <h3>Whats your lucky name</h3>
        <input type="text" ref={inputOne} />
        <button type="submit">submit</button>
      </form>
      <div>{show ? `your lucky name is ${inputOne.current.value}` : ""}</div>
    </>
  );
}
