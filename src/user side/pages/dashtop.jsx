import React from "react";
import "../styles/dashtop.css";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { ArrowDropDown, ArrowUpward, ArrowDownward } from "@mui/icons-material";
import AverageTeamKPI from "../components/kpigraph";




const kpiData = [
  {
    title: "Total Employee",
    value: "323",
    change: "10%",
    sub: "last month 313",
    icon: <ArrowUpward className="kpi-icon up" />,
  },
  {
    title: "Total Revenue",
    value: "$8,903.44",
    change: "5%",
    sub: "last month $7,892.11",
    icon: <ArrowUpward className="kpi-icon up" />,
  },
  {
    title: "Turnover Rate",
    value: "8%",
    change: "1%",
    sub: "last month 9%",
    icon: <ArrowDownward className="kpi-icon down" />,
  },
  {
    title: "Attendance Rate",
    value: "94%",
    change: "5%",
    sub: "last month 99%",
    icon: <ArrowDownward className="kpi-icon down" />,
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-header">
        <div>
          <h2>Dashboard</h2>
          <p>Explore your needs here</p>
        </div>
        <div className="dashboard-header-actions">
          <Button variant="outlined" className="month-button">
            January <ArrowDropDown />
          </Button>
          <Button variant="contained" className="export-button">Export</Button>
        </div>
      </div>

      <div className="kpi-row">
        {kpiData.map((item, index) => (
          <Card key={index} className="kpi-card">
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                {item.title}
              </Typography>
              <Typography variant="h5" className="kpi-value">
                {item.value}
              </Typography>
              <div className="kpi-change">
                {item.icon}
                <span className={`kpi-change-text ${item.icon.props.className.includes("down") ? "red" : "green"}`}>
                  {item.change} vs {item.sub}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
<AverageTeamKPI/>
      {/* Add attendance + graph + task section here (if needed I'll continue it for you) */}
    </div>
  );
};

export default Dashboard;
 