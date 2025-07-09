import React from "react";
import "../Table.css";

export default function Header() {
  return (
    <>
      <thead>
         <tr>
    <th className="wh"></th>
    <th colSpan="4">📄 Q3 Financial Overview</th>
      <th className="wh"></th>
 <th style={{ backgroundColor: "#dce5d8", color: "#2d3e29" }}>
      🔤 ABC <span className="dots">⋯</span>
    </th>
  <th colSpan="2" style={{ backgroundColor: "#e5dbf8", color: "#2d254d" }}>
      ❓ Answer a question <span className="dots">⋯</span>
    </th>
    <th style={{ backgroundColor: "#fcdcd3", color: "#52231d" }}>
      📤 Extract <span className="dots">⋯</span>
    </th>
    <th>➕</th>
  </tr>
        <tr>
          <th>#</th>
          <th>Job Request</th>
          <th>Submitted</th>
          <th>Status</th>
          <th>Submitter</th>
          <th>URL</th>
          <th style={{ backgroundColor:"#dce5d8", color: "#2d3e29" }}>Assigned</th>
          <th style={{ backgroundColor: "#e5dbf8", color: "#2d254d" }}>Priority</th>
          <th style={{ backgroundColor: "#e5dbf8", color: "#2d254d" }}>Due Date</th>
          <th style={{ backgroundColor: "#fcdcd3", color: "#52231d" }}>Est. Value</th>
             <th></th>
        </tr>
      </thead>
    </>
  );
}
