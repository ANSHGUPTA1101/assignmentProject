import React from "react";
import "../Table.css";


export default function Toolbar() {
  const handleClick = (label) => {
    console.log(`${label} clicked`);
  };

  return (
    
    <div className="toolbar">
        
      <div className="toolbar-left">
        {["Tool bar  »", "|", "👁️  Hide Fields", "⬇️⬆️ Sort", "🧃 Filter", "🔲 Cell View"].map((btn) => (
          <button key={btn}  onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div className="toolbar-right">
        {["⬇️ Import", "⬆️ Export", "🔗 Share"].map((btn) => (
          <button key={btn} onClick={() => handleClick(btn)}>
            {btn}
          </button>
        ))}
        <button className="new-action" onClick={() => handleClick("New Action")}>
         ➕ New Action
        </button>
      </div>
    </div>
  );
}
