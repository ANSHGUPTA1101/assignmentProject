import React from "react";
import "../../src/Components/Headbar.css"


export default function HeaderBar() {
  return (
    <div className="header-bar">
      <div className="breadcrumbs">
        <span>🪟 Workspace &gt; Folder 2 &gt; </span>
        <strong>Spreadsheet 3</strong>
      </div>
      <div className="header-right">
        <input type="text" placeholder="🔍 Search within sheet" />
        <div className="notification-wrapper">
          <button className="icon">🔔</button>
          <span className="badge">2</span>
        </div>
      <div className="user-profile">
          <img
            src="https://i.pravatar.cc/40"
            alt="User Avatar"
            className="avatar"
          />
          <span className="username">John Doe</span>
        </div>
      
      </div>
    </div>
  );
}