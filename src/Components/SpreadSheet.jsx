import React from "react";
import Header from "./Header";
import "../Table.css";

export default function Spreadsheet() {
  function getStatusStyle(status) {
    if (status === "In-process") return { backgroundColor: " #f9eecf" ,color: "#996d00"};
    else if (status === "Need to start") return { backgroundColor: " #d0d9e8", color: "#3e4e63" };

    else if (status === "Complete") return { backgroundColor: " lightgreen", color: "green" };
      else if (status === "Blocked") return { backgroundColor: "#fddede", color: "#cc0000"};
  }

   function getPrioStyle(  priority) {
    if (  priority=== "Medium") return {color: "#996d00"};
    else if (  priority === "High") return {  color: "Red" };

    else if (  priority === "Low") return {color: "Blue"};
   }



  const data = [
    {
      job: "Launch social media campaign for pro...",
      submitted: "15-11-2024",
      status: "In-process",
      submitter: "Aisha Patel",
      url: "www.aishapatel...",
      assigned: "Sophie Choudhury",
      priority: "Medium",
      due: "20-11-2024",
      value: "₹6,000,000",
    },
    {
      job: "update press kit for company redesign",
      submitted: "28-10-2024",
      status: "Need to start",
      submitter: "Irfan Khan",
      url: "www.irfankhanp...",
      assigned: "Tejas Pandey",
      priority: "High",
      due: "30-10-2024",
      value: "₹3,500,000",
    },
    {
      job: "Finalize user testing feedback for app...",
      submitted: "05-12-2024",
      status: "In-process",
      submitter: "Mark Johnson",
      url: "www.markjohs...",
      assigned: "Rachel Lee",
      priority: "Medium",
      due: "10-12-2024",
      value: "₹4,750,000",
    },
    {
      job: "Design new features for the website",
      submitted: "10-01-2025",
      status: "Complete",
      submitter: "Emily Green",
      url: "www.emilygreen..",
      assigned: "Tom Wright",
      priority: "Low",
      due: "15-1-2025",
      value: "₹5,900,000",
    },
    {
      job: "Prepare financial report for Q4",
      submitted: "25-01-2025",
      status: "Blocked",
      submitter: "Jessica Brown",
      url: "www.jessicabro..",
      assigned: "Kevin Smith",
      priority: "Low",
      due: "30-1-2025",
      value: "₹2,800,000",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
    {
      job: "",
      submitted: "",
      status: "",
      submitter: "",
      url: "",
      assigned: "",
      priority: "",
      due: "",
      value: "",
    },
  ];

  return (
    <div className="spreadsheet">
      <table>
        <Header />
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{row.job}</td>
              <td>{row.submitted}</td>
              <td>
                {" "}
                <span className="sta" style={getStatusStyle(row.status)}>{row.status}</span>
              </td>
              {/* <td>{row.status}</td> */}
              <td>{row.submitter}</td>
              <td>{row.url}</td>
              <td>{row.assigned}</td>
               <td>
                {" "}
                <span  style={getPrioStyle(row.priority)}>{row.priority}</span>
              </td>
              {/* <td>{row.priority}</td> */}
              <td>{row.due}</td>
              <td>{row.value}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
