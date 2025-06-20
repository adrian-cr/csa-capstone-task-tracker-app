import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import TaskDetails from "./pages/TaskDetails";
import { Container, Typography } from "@mui/material";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Container
        maxWidth="100%"
        sx={{
          p: 0,
          height: "100vh",
        }}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-task" element={<AddTask />} />
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </Container>
    </Router>
  );
}
