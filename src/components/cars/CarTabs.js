import { useState } from "react";
import CarCard from "./CarCard";
import "./CarTabsStyle.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="car-tabs-container">
      <div className="tabs-div">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          3 Seaters
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          5 Seaters
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
         7 Seaters
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>3 Seater</h2>
          <hr />
         <div className="car-panel">
             <div className="car-item"><CarCard /></div>
             <div className="car-item">car 2</div>
             <div className="car-item">car 3</div>
         </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <div className="car-panel">
             <div className="car-item"><CarCard /></div>
             <div className="car-item"><CarCard /></div>
             <div className="car-item">car 3</div>
             <div className="car-item"><CarCard /></div>
             <div className="car-item"><CarCard /></div>
             <div className="car-item">car 3</div>
         </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <div className="car-panel">
             <div className="car-item"><CarCard /></div>
             <div className="car-item">car 2</div>
             <div className="car-item"><CarCard /></div>
         </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;