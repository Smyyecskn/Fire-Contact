import "./App.css";
import Contacts from "./components/contacts/Contacts";
import FormComponent from "./components/form/FormComponent";
import { useState } from "react";

function App() {
  const [info, setInfo] = useState({
    username: "",
    phoneNumber: "",
    gender: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <FormComponent
        info={info}
        setInfo={setInfo}
        handleSubmit={handleSubmit}
      />
      <Contacts />
    </div>
  );
}

export default App;
