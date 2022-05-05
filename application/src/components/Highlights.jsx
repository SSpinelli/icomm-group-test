import React from "react";
import './style/highlights.css'
import SimpleSlider from "./SimpleSlider";

const Highlights = (_props) => {
  return (
    <main>
      <div className="h1-container">
        <h1 className="h1-highlights">Destaques</h1>
      </div>
      <SimpleSlider />
    </main>
  )
}

export default Highlights;