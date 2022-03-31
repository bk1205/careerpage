import React from "react";
import { Dropdown } from "./Dropdown";
import "./Dashboard.css";
import Description from "./Description";
import { empTypes, jobSections } from "../data/data";
import { CustomOption1, CustomOption2, CustomOption3 } from "./Options";

const Dashboard = () => {
  let jobSects = [];
  jobSections.map((opt) => {
    jobSects.push({ label: opt, value: opt });
  });

  let employmentTypes = [];
  empTypes.map((emp) => {
    employmentTypes.push({ label: emp, value: emp });
  });

  const workplaceTypes = [
    { value: "On-site", label: "Employees come to work in-person" },
    { value: "Hybrid", label: "Employees work on-site and off-site" },
    { value: "Remote", label: "Employees work off-site" },
  ];

  const types = [
    { label: "Paid", value: "Paid" },
    { label: "Gratis", value: "Gratis" },
  ];

  return (
    <div className="dashboard">
      <h2>Career Dashboard</h2>
      <form>
        <div className="dashboard__row1">
          <input placeholder="Title" />
          <Dropdown
            placeholder="Employment type"
            options={employmentTypes}
            customElement={CustomOption1}
            elemNo={1}
          />
        </div>
        <div className="dashboard__row2">
          <input placeholder="Location" />
          <Dropdown
            placeholder="Job Section"
            options={jobSects}
            customElement={CustomOption2}
            elemNo={2}
          />
          <Dropdown
            placeholder="Workplace type"
            options={workplaceTypes}
            customElement={CustomOption3}
            elemNo={3}
          />
          <Dropdown
            placeholder="Paid / Gratis"
            options={types}
            customElement={CustomOption1}
            elemNo={2}
          />
        </div>
        <div className="dashboard__row3">
          <input placeholder="Short Description ( 150 Words )" />
        </div>
        <Description />
        <div className="dashboard__btn">
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
