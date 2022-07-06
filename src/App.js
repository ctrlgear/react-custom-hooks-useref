import "./App.css";
import { useEffect, useRef, useState } from "react";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef("John");
  const lastNameRef = useRef("Doe");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();

    setFirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <p>{joke}</p>
      <form>
        <input
          ref={firstNameRef}
          type="text"
          id="firstname"
          placeholder="firstname"
        />
        <input
          ref={lastNameRef}
          type="text"
          id="lastname"
          placeholder="lastname"
        />
      </form>
      <button onClick={generateJoke}>new random joke</button>
    </div>
  );
}

export default App;
