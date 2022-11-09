import React from "react";
import ContactCards from "./ContactCards";
import contacts from "../contacts";
function App() {
  return (
    <div>
      <ContactCards
        name={contacts[0].name}
        pic={contacts[0].imgURL}
        tell={contacts[0].phone}
      />
      <ContactCards
        name={contacts[1].name}
        pic={contacts[1].imgURL}
        tell={contacts[1].phone}
      />
    </div>
  );
}

export default App;
